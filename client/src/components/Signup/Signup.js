import React, { useContext, useState } from "react";
import { User } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../context/Store/Store";
const Signup = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { error, register } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("password don't match");
    } else {
      register(name, email, password);
      setMessage("");
    }
  };
  return (
    <section className="py-10 my-24">
      <div className="container">
        <form
          className="w-full md:w-1/2 lg:w-1/3 m-auto shadow-2xl rounded-md  border-t-4 p-5 lg:p-8 border-primary  bg-gray-50"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="mb-3 text-center flex items-center justify-center">
              <p>{error}</p>
            </div>
          )}
          {message && (
            <div className="mb-3 text-center flex items-center justify-center">
              <p>{message}</p>
            </div>
          )}
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
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-none focus:outline-none border placeholder:text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 flex items-center justify-center">
            <button
              className="p-3 bg-primary text-gray-100 w-full"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-300">
              Already have an account ?
              <Link
                to={`/login?redirect=${redirect}`}
                className="text-primary ml-2"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
