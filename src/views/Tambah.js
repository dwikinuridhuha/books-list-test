import React, { useContext, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import GlobalContext from "store/context";

const Tambah = () => {
  const { sampleGlobalVar } = useContext(GlobalContext);

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
      .post(`http://159.223.57.121:8080/books`, sendData, {
        headers: {
          Authorization: `${sampleGlobalVar.token}`,
        },
      })
      .then((res) => {
        if ("sukses") {
          console.log("sukses");
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
        <h1 className="mb-4 font-bold">Tambah Buku</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="judul"
            >
              Judul
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="judul"
              type="text"
              placeholder="judul"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="isbn"
            >
              ISBN
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="isbn"
              type="text"
              placeholder="isbn"
              name="isbn"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="penerbit"
            >
              Penerbit
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="penerbit"
              type="text"
              placeholder="penerbit"
              name="author"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="deskripsi"
            >
              Deskripsi
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="deskripsi"
              type="text"
              placeholder="deskripsi"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <Link
              to="/buku"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Kembali
            </Link>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Tambah.displayName = "Tambah";

export default Tambah;
