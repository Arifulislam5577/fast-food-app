import React from "react";
import BurgerList from "../Burger/BurgerList";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import Menu from "../Menu/Menu";
import ReserveForm from "../ReserveForm/ReserveForm";

const Home = () => {
  return (
    <main className="mt-14">
      <Hero />
      <Featured />
      <BurgerList />
      <Menu />
      <ReserveForm />
    </main>
  );
};

export default Home;
