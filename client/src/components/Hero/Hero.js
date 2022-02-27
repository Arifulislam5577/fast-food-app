import React from "react";

const Hero = () => {
  return (
    <section className=" w-full  hero flex flex-col items-center justify-center overflow-y-auto">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
          <div className="hero-text order-2 lg:order-1 justify-start  flex flex-col gap-2 lg:gap-5 lg:w-1/2 w-full mb-5 lg:mb-0">
            <h3 className="uppercase text-3xl text-center  lg:text-left lg:text-2xl font-bold border-4 p-2 border-secondary text-secondary border-dashed ">
              GET YOUR BELLY FULL THIS WEEKEND
            </h3>
            <h2
              className="text-5xl  text-secondary  
            lg:text-7xl  font-extrabold slide-right text-center lg:text-left"
            >
              THE MIGHTY
            </h2>
            <h1
              className="text-5xl text-secondary  text-center lg:text-left
            lg:text-7xl  font-extrabold slide-right"
            >
              BURGER
            </h1>
          </div>
          <div className="hero-image  lg:w-1/2 w-full order-1 lg:order-2">
            <img
              src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/burger-deal_xartnm.png"
              alt="hero-img"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
