import React, { useContext } from "react";
import { DataContext } from "../../context/Store/Store";
import { ClipboardText, Trash, Plus, Minus } from "phosphor-react";
const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty } =
    useContext(DataContext);

  const formatNum = (num) => {
    return ((num * 100) / 100).toFixed(2);
  };

  const totalItemsPrice = cart.reduce(
    (acc, item) => acc + item.qty * 1 * item.price,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.qty * 1, 0);
  const shippingPrice = totalItemsPrice > 20 ? 0 : 5;
  const totalPrice = totalItemsPrice + shippingPrice;
  return (
    <section className="py-10 my-14">
      <div className="container">
        <h1 className="text-3xl font-bold">Cart</h1>
        {cart.length > 0 ? (
          <div className="my-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <table className=" col-span-2 table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3">Product</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Subtotal</th>
                    <th className="p-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr
                      className="w-full border-b border-l border-r"
                      key={product._id}
                    >
                      <td className="p-2 text-center m-auto">
                        <img
                          src={product.url}
                          alt={product.title}
                          className="h-10 w-10 m-auto"
                        />
                      </td>
                      <td className="p-2 text-center">${product.price}</td>
                      <td className="p-2 text-center ">
                        <button
                          className="border p-2 mr-2"
                          onClick={() => incrementQty(product._id, product.qty)}
                        >
                          <Plus size={16} color="#ffcc00" weight="light" />
                        </button>
                        {product.qty}
                        <button
                          className="border p-2 ml-2"
                          onClick={() => decrementQty(product._id, product.qty)}
                          disabled={product.qty === 1}
                        >
                          <Minus size={16} color="#ffcc00" weight="light" />
                        </button>
                      </td>
                      <td className="p-2 text-center">
                        ${formatNum(product.qty * product.price)}
                      </td>
                      <td
                        className="p-2 text-center m-auto"
                        onClick={() => removeFromCart(product._id)}
                      >
                        <Trash
                          size={32}
                          color="#ffcc00"
                          weight="light"
                          className="text-center w-full m-auto cursor-pointer	"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <h1 className="text-center p-2 uppercase text-xl font-medium bg-gray-100">
                  cart total
                </h1>
                <ul className="flex items-center justify-between p-2 border-l border-r border-b">
                  <li>Items</li>
                  <li>{totalItems}</li>
                </ul>
                <ul className="flex items-center justify-between p-2 border-l border-r border-b">
                  <li>Price</li>
                  <li>${formatNum(totalItemsPrice)}</li>
                </ul>
                <ul className="flex items-center justify-between p-2 border-l border-r border-b">
                  <li>Shipping</li>
                  <li>${formatNum(shippingPrice)}</li>
                </ul>
                <ul className="flex items-center justify-between p-2 border-l border-r border-b">
                  <li>Total Price</li>
                  <li>${formatNum(totalPrice)}</li>
                </ul>
                <ul className="flex items-center justify-center text-gray-50 p-2 border-l border-r border-b bg-primary ">
                  <button className="w-full">Proceed to checkout</button>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 border-t-2 border-primary p-3 mt-5 bg-gray-200">
            <ClipboardText size={32} color="#ffcc00" weight="light" />
            <h1>Your cart is currently empty.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
