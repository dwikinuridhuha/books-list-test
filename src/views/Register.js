import React, { useContext, useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import GlobalContext from "store/context";

const Register = () => {
  const { updateSampleGlobalVar } = useContext(GlobalContext);
  const history = useHistory();

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = {
      id: Math.floor(Math.random() * 1000000),
    };

    const sendData = {
      ...id,
      ...formData,
    };

    axios
      .post(`http://159.223.57.121:8080/auth/do-register`, sendData)
      .then((res) => {
        if (res.status === 200) {
          const simpanData = {
            address: res.data.data.address,
            id: res.data.data.id,
            profileName: res.data.data.profileName,
            role: res.data.data.role,
            token: res.data.data.token,
            username: res.data.data.username,
          };
          updateSampleGlobalVar(simpanData);
          history.push("/buku");
        }
      });
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="items-center justify-center flex h-screen">
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 sm:shadow-md">
        <form onSubmit={handleSubmit}>
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
              name="username"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
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
              name="profileName"
              onChange={handleChange}
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
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.displayName = "Register";

export default Register;
