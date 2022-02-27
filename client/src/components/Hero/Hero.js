import React from "react";

const Hero = () => {
  return (
    <section className=" w-full hero flex flex-col items-center justify-center">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="hero-text order-2 lg:order-1 flex flex-col gap-2 lg:gap-5">
            <h3 className="uppercase text-xl lg:text-2xl font-bold border-4 p-2 border-secondary text-secondary border-dashed ">
              GET YOUR BELLY FULL THIS WEEKEND
            </h3>
            <h2
              className="text-3xl text-secondary  
            lg:text-7xl  font-extrabold"
            >
              THE MIGHTY
            </h2>
            <h1
              className="text-3xl text-secondary  
            lg:text-7xl  font-extrabold"
            >
              BURGER
            </h1>
          </div>
          <div className="hero-image order-1 lg:order-2 w-full lg:w-1/2">
            <img
              src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/burger-deal_xartnm.png"
              alt="hero-img"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
