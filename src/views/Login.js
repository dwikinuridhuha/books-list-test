import React, { useContext, useReducer } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import GlobalContext from "store/context";

const Login = () => {
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

    const sendData = {
      ...formData,
    };

    axios
      .post(`http://159.223.57.121:8080/auth/do-login`, sendData)
      .then((res) => {
        if (res.data.message != "PASSWORD OR USER NOT REGISTERED") {
          const simpanData = {
            address: res.data.data.address,
            id: res.data.data.id,
            profileName: res.data.data.profileName,
            role: res.data.data.role,
            token: res.data.data.token,
            username: res.data.data.username,
          };
          localStorage.setItem("dataUser", JSON.stringify(simpanData));
          updateSampleGlobalVar(simpanData);
          history.push("/buku");
        } else {
          console.log(res.data);
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
          <div className="flex items-center justify-between">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
            >
              Sign In
            </button>

            <Link
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              to="/"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-black">New User</span>
            </div>
            <Link
              to="/register"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.displayName = "Login";

export default Login;
