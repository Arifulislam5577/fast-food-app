import React from "react";

const Menu = () => {
  return (
    <section className="py-10" id="menu">
      <div className="container">
        <h2 className="lg:text-5xl text-3xl  text-center  font-extrabold text-secondary tracking-wider	 uppercase font-Alfa">
          CHECK MENU
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
          <div className="flex flex-col gap-5 items-center justify-center rounded-md py-5 shadow">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931031/Fast-Food/burder_i7fycq.png"
                alt="icon"
                className="h-40"
              />
            </div>
            <div className="title">
              <h2 className="text-xl font-bold text-secondary ">
                BURGERS & DRINKS
              </h2>
            </div>
            <div className="product-list flex flex-col gap-2">
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">01:</span> Single Patty Burger
                </li>
                <li className="text-primary font-bold">$2.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">02:</span> Double Patty Burger
                </li>
                <li className="text-primary font-bold">$3.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">03:</span> Grilled Burger
                </li>
                <li className="text-primary font-bold">$4.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">04:</span> Spicy Beef Burger
                </li>
                <li className="text-primary font-bold">$5.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">05:</span> Regular Drink
                </li>
                <li className="text-primary font-bold">$1.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">06:</span> Up Size Drink
                </li>
                <li className="text-primary font-bold">$2.49</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 ">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">07:</span> French Fries
                </li>
                <li className="text-primary font-bold">$1.49</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center rounded-md py-5 shadow bg-secondary">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/sandwich-1_wtif0k.png"
                alt="icon"
                className="h-40"
              />
            </div>
            <div className="title">
              <h2 className="text-xl font-bold text-gray-50 ">SANDWICHES</h2>
            </div>
            <div className="product-list flex flex-col gap-2">
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">01:</span> Chicken Sandwich
                </li>
                <li className="text-primary font-bold">$2.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">02:</span> Vegetable Sandwich
                </li>
                <li className="text-primary font-bold">$3.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">03:</span> Grilled Chicken
                  sandwich
                </li>
                <li className="text-primary font-bold">$4.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">04:</span> Cheese Sandwich
                </li>
                <li className="text-primary font-bold">$5.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">05:</span> The Italian Sandwich
                </li>
                <li className="text-primary font-bold">$1.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">06:</span> Sandwich Platter
                </li>
                <li className="text-primary font-bold">$2.49</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">07:</span> Notella Sandwich
                </li>
                <li className="text-primary font-bold">$2.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 ">
                <li className="text-gray-50 font-bold capitalize">
                  <span className="text-primary">08:</span> Boiled Egg Sandwich
                </li>
                <li className="text-primary font-bold">$1.49</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center rounded-md py-5 shadow">
            <div className="icon">
              <img
                src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/steak_eab0rj.png"
                alt="icon"
                className="h-40"
              />
            </div>
            <div className="title">
              <h2 className="text-xl font-bold text-secondary ">
                STEAKS & BBQ
              </h2>
            </div>
            <div className="product-list flex flex-col gap-2">
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">01:</span> Hot & Spicy Chicken
                </li>
                <li className="text-primary font-bold">$2.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">02:</span> Juicy Beef Steak
                </li>
                <li className="text-primary font-bold">$3.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">03:</span> The Sweet Treat
                </li>
                <li className="text-primary font-bold">$4.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">04:</span> Roasted Chicken
                  (Full)
                </li>
                <li className="text-primary font-bold">$5.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">05:</span> Feel the Heat
                </li>
                <li className="text-primary font-bold">$1.99</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 border-b">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">06:</span> Chew it If You Can
                </li>
                <li className="text-primary font-bold">$2.49</li>
              </ul>
              <ul className="flex items-center justify-between gap-5 p-1 ">
                <li className="text-dark font-bold capitalize">
                  <span className="text-primary">07:</span> The Vegetarian Way
                </li>
                <li className="text-primary font-bold">$1.49</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
