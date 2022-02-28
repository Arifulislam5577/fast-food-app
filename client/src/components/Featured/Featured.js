import React from "react";
import "./Featured.css";
const Featured = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5">
          <div className="right-side rounded-md overflow-hidden  lg:row-span-2">
            <div className="right-side-text flex flex-col gap-5 items-start p-10 justify-between ">
              <div className="text flex flex-col gap-5">
                <h3 className="text-2xl font-extrabold text-gray-50 uppercase">
                  today's special
                </h3>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-50 uppercase">
                  GRILLED BURGER WITH SALAD AND FRIES
                </h1>
              </div>
              <div>
                <button className="orderbtn bg-secondary p-3 text-gray-50 uppercase px-5 rounded-md">
                  order now
                </button>
              </div>
            </div>
          </div>
          <div className="left-side-top rounded-md overflow-hidden bg-orange-500 lg:row-span-1 flex flex-col gap-5 items-start p-10">
            <h3 className="text-2xl font-extrabold text-gray-50 uppercase">
              WHAT'S NEW
            </h3>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-50 uppercase">
              THE ONE BITE BURGERS
            </h1>
          </div>
          <div className="left-side-bottom rounded-md overflow-hidden bg-orange-500 lg:row-span-1 flex flex-col gap-5 items-start p-10">
            <h3 className="text-2xl font-extrabold text-gray-50 uppercase">
              WHAT'S HOT
            </h3>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-50 uppercase">
              THE JUICY BEEF STEAK
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
