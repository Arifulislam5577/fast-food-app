import React from "react";
import "./Reserve.css";
const ReserveForm = () => {
  return (
    <section className="py-10 reserve w-full">
      <div className="container">
        <h2 className="lg:text-5xl text-3xl  text-center  font-extrabold text-secondary tracking-wider	 uppercase font-Alfa">
          RESERVE TABLE
        </h2>
        <div className="form w-2/3 m-auto my-10">
          <form>
            <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <input
                type="text"
                required
                className="border-2 rounded p-3 placeholder-secondary"
                placeholder="First Name"
              />
              <input
                type="text"
                required
                className="border-2 rounded p-3 placeholder-secondary"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3 w-full">
              <input
                type="email"
                required
                className="border-2 rounded p-3 placeholder-secondary w-full"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 grid grid-cols-1 lg:grid-cols-3 gap-5">
              <input
                type="number"
                required
                className="border-2 rounded p-3 placeholder-secondary"
                placeholder="Number Of People"
              />
              <select className="border-2 rounded p-3 placeholder-secondary">
                <option selected>Timing</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
              <input
                type="date"
                className="border-2 rounded p-3 placeholder-secondary"
                placeholder="Date"
              />
            </div>
            <div className="mb-3 w-full">
              <textarea
                type="email"
                required
                className="border-2 rounded p-3 placeholder-secondary w-full"
                placeholder="Any Special Instructions"
              />
            </div>
            <div className="mb-3 w-full">
              <button className="block text-gray-50 w-full text-xl p-3 rounded bg-secondary uppercase font-bold">
                reserved my table
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReserveForm;
