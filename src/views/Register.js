/*
username
password
profile name
address -> test box
*/

// node_modules
import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

// context
import GlobalContext from "store/context";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);

  return (
    <div className="items-center justify-center flex h-screen">
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 sm:shadow-md">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>

        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="profile"
          >
            Profile Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="profile"
            type="text"
            placeholder="Profile Name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="address"
          >
            address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="address"
            placeholder="Address"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

Register.displayName = "Register";

export default Register;
