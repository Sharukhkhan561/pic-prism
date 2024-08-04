import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center  w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">Lets connect </h1>
        <form>
          {/*  for Username */}
          <div className="mb-4">
            <label
              htmlFor="usename"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* for passowrd */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* for password  */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          {/* for select account */}
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Your Account Type
            </label>

            <select className="shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          {/* login with account  */}
          <div className="flex items-center justify-end mb-4">
            <Link className="text-xs text-black text-" to="/login">
              Login with Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
