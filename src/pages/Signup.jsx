import React from "react";
// import { Fragment } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

const Signup = () => {
  return (
    <>
      <div className="h-300 w-500 flex items-center justify-center">
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Sign up</h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                {" "}
                First Name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                {" "}
                Last Name
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Email
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Mobile
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <button className="block w-full bg-red-400 hover:bg-red-300 p-4 rounded text-white-900 hover:text-red-800 transition duration-300">
              Create Account
            </button>
            <p class="mt-2 text-black-500 text-xs">
              Already have an account,{" "}
              <a href="#" class="text-red-700 font-bold">
                Login
              </a>{" "}
              now.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
