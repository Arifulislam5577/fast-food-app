import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, List, X } from "phosphor-react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav className="lg:bg-dark bg-primary text-primary   fixed top-0 w-full z-50   border-b-0 md:border-b-4 border-primary drop-shadow	lg:drop-shadow-none ">
      <div className="lg:container flex items-center justify-between">
        <div className="logo-box hidden lg:block">
          <ul className="cart-logo flex items-center justify-between gap-5 ">
            <li>
              <Link
                to="/cart"
                className="flex items-center justify-between relative "
              >
                <ShoppingCart size={32} color="#ffffff" className="relative" />
                <span className="absolute cart bg-secondary rounded-full h-4 flex items-center justify-center w-4 text-gray-100 text-xs">
                  0
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/logo-1_g21orp.png"
                  alt="Logo"
                  className="h-16"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-list hidden lg:block">
          <ul className=" flex items-center justify-between gap-5 font-medium uppercase">
            <li>
              <Link to="/" className="hover:text-redx transition ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-redx transition ">
                shop
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-redx transition ">
                menu
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-redx transition ">
                book table
              </Link>
            </li>
          </ul>
        </div>

        <div className="delivery-express flex items-center justify-between  capitalize gap-2 lg:gap-5 bg-primary border-b-0  lg:border-b border-dark">
          <div className="icon">
            <img
              src="https://res.cloudinary.com/dwrpcntox/image/upload/v1645931037/Fast-Food/vector_mn6etw.svg"
              alt="delivered icon"
              className="h-16 "
            />
          </div>
          <h1 className="text-sm lg:text-2xl font-bold uppercase text-redx">
            Express delivery
          </h1>
          <h1 className="text-sm lg:text-2xl font-bold uppercase  text-dark mr-3">
            111-222-333
          </h1>
        </div>
        <div className="hamburger-menu block lg:hidden m-0">
          <button
            className="relative bg-dark p-4 px-10 transition-all"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <X size={32} color="#FFCC00" />
            ) : (
              <List size={32} color="#FFCC00" />
            )}
          </button>
          {active && (
            <ul
              className={`flex   min-h-screen flex-col  gap-0 lg:gap-5  font-medium uppercase absolute w-1/2 bg-dark text-gray-50  top-16 right-0 transition-all`}
            >
              <li>
                <Link
                  className=" px-5 p-3 hover:bg-primary hover:text-dark transition block"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" px-5 p-3 hover:bg-primary transition block  hover:text-dark "
                  to="/deals"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  className=" px-5 p-3  hover:text-dark hover:bg-primary transition block"
                  to="/menu"
                >
                  menu
                </Link>
              </li>
              <li>
                <Link
                  className=" px-5 p-3 hover:bg-primary  hover:text-dark transition block"
                  to="/book"
                >
                  book table
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
