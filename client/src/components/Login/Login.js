import React from "react";
import { User } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
const Login = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <section className="py-10 my-24">
      <div className="container">
        <form className="w-full md:w-1/2 lg:w-1/3 m-auto shadow-2xl rounded-md  border-t-4 p-5 lg:p-8 border-primary bg-gray-50">
          <div className="mb-3 text-center flex items-center justify-center">
            <User
              size={96}
              color="#ffcc00"
              weight="bold"
              className="border-2 border-primary p-3 rounded-full"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
            />
          </div>

          <div className="mb-3">
            <button
              className="p-3 bg-primary text-gray-100 w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-300">
              Create a new account ?
              <Link
                to={`/signup?redirect=${redirect}`}
                className="text-primary ml-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
