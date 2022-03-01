import React from "react";

const BurgerList = () => {
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
          <div className="product flex flex-col items-center justify-center shadow rounded-md p-3">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931033/Fast-Food/burger-1-300x216_qweew3.png"
                alt="product-title"
              />
            </div>
            <div className="product-details text-center">
              <h2 className="text-3xl font-bold text-secondary">
                CRISPY CHICKEN
              </h2>
              <p className="text-sm text-gray-600 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="px-5 p-2 text-gray-50 rounded-md uppercase bg-redx">
                add to cart
              </button>
            </div>
          </div>
          <div className="product flex flex-col items-center justify-center shadow rounded-md p-3">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931035/Fast-Food/burger-3-300x234_gcgdw4.png"
                alt="product-title"
              />
            </div>
            <div className="product-details text-center">
              <h2 className="text-3xl font-bold text-secondary">
                DOUBLE TREAT
              </h2>
              <p className="text-sm text-gray-600 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="px-5 p-2 text-gray-50 rounded-md uppercase bg-redx">
                add to cart
              </button>
            </div>
          </div>
          <div className="product flex flex-col items-center justify-center shadow rounded-md p-3">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931034/Fast-Food/burger-2-300x241_zpblvl.png"
                alt="product-title"
              />
            </div>
            <div className="product-details text-center">
              <h2 className="text-3xl font-bold text-secondary">
                GRILLED BEEF
              </h2>
              <p className="text-sm text-gray-600 my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="px-5 p-2 text-gray-50 rounded-md uppercase bg-redx">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerList;
