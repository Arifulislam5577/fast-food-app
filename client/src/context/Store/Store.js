import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const DataContext = createContext();

const DataProvider = (props) => {
  const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(cartItemsFromStorage);
  const [userInfo, setUserInfo] = useState(userInfoFromStorage);

  const addToCart = async (id) => {
    setLoad(true);
    const { data } = await axios.get(`/api/v1/products/${id}`);
    setLoad(false);

    if (!cart.find((pd) => pd._id === data._id)) {
      const product = {
        _id: data._id,
        title: data.title,
        description: data.description,
        url: data.url,
        price: data.price,
        qty: 1,
      };
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    const product = cart.filter((pd) => pd._id !== id);
    setCart(product);
  };

  const incrementQty = (id, qty) => {
    const product = cart.find((pd) => pd._id === id);
    product.qty = qty + 1;
    setCart([...cart]);
  };
  const decrementQty = (id, qty) => {
    const product = cart.find((pd) => pd._id === id);
    product.qty = qty - 1;
    setCart([...cart]);
  };

  localStorage.setItem("cartItems", JSON.stringify(cart));

  // USER LOGIN/REGISTER

  const register = async (name, email, password) => {
    console.log(name, email, password);
    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/v1/users/signup`,
        { name, email, password },
        config
      );
      setLoading(false);
      setUserInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/v1/products`);
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        loading,
        load,
        removeFromCart,
        products,
        error,
        cart,
        addToCart,
        incrementQty,
        decrementQty,
        register,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
