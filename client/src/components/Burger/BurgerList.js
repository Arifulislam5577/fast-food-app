import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/Store/Store";
import { SpinnerGap } from "phosphor-react";

const BurgerList = () => {
  const navigate = useNavigate();
  const { loading, load, products, error, addToCart, cart } =
    useContext(DataContext);

  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center flex-col justify-center w-full m-auto gap-3 mb-10">
          <h3 className="text-2xl font-extrabold text-secondary uppercase">
            always tasty
          </h3>
          <h1 className="lg:text-5xl text-3xl  font-extrabold text-secondary tracking-wider	 uppercase font-Alfa">
            choose & enjoy
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {loading ? (
            <SpinnerGap
              size={96}
              color="#ffcc00"
              weight="fill"
              className="spinner"
            />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            products?.map((product) => {
              const { _id, title, description, url } = product;
              return (
                <div
                  className="product flex flex-col items-center justify-center shadow rounded-md p-3"
                  key={_id}
                >
                  <div className="product-image">
                    <img src={url} alt={title} />
                  </div>
                  <div className="product-details text-center">
                    <h2 className="text-3xl font-bold text-secondary">
                      {title}
                    </h2>
                    <p className="text-sm text-gray-600 my-4">{description}</p>
                    <div className="flex items-center justify-center">
                      {cart.find((pd) => pd._id === _id) ? (
                        <button
                          className="px-5 p-2 text-dark rounded-md uppercase bg-gray-400"
                          onClick={() => navigate("/cart")}
                        >
                          view cart
                        </button>
                      ) : (
                        <button
                          className="px-5 p-2 text-gray-50 rounded-md uppercase bg-redx flex items-center justify-center"
                          onClick={() => addToCart(_id)}
                        >
                          order now
                          {load && (
                            <SpinnerGap
                              size={24}
                              color="#fff"
                              weight="fill"
                              className="spinner"
                            />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default BurgerList;
