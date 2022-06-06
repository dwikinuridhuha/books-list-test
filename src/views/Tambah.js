/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import GlobalContext from "store/context";

const Tambah = () => {
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    description: "",
    isbn: "",
    publisher: "",
  });

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const sendData = {
      id,
      ...formData,
    };

    axios
      .put(`http://159.223.57.121:8080/books`, sendData, {
        headers: {
          Authorization: `${sampleGlobalVar.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handleSubmitAdd = (event) => {
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
        setFormData({
          author: "",
          title: "",
          description: "",
          isbn: "",
          publisher: "",
        });
      });
  };

  const handleChangeAdd = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeEdit = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getBookById = (token) => {
    axios
      .get(`http://159.223.57.121:8080/books/findbyid/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        const injekData = {
          title: res.data.data.title,
          isbn: res.data.data.isbn,
          author: res.data.data.author,
          description: res.data.data.description,
          publisher: res.data.data.publisher,
        };
        setFormData(injekData);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const isEditForm = () => {
    if (id != null) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (localStorage.getItem("dataUser") !== null && isEditForm() == true) {
      const getDataUserInLocalStorage = JSON.parse(
        localStorage.getItem("dataUser")
      );
      updateSampleGlobalVar(getDataUserInLocalStorage);
      getBookById(getDataUserInLocalStorage.token);
      setIsEdit(true);
      console.log(getDataUserInLocalStorage);
    } else {
      const getDataUserInLocalStorage = JSON.parse(
        localStorage.getItem("dataUser")
      );
      updateSampleGlobalVar(getDataUserInLocalStorage);
      setIsEdit(false);
      console.log(getDataUserInLocalStorage);
    }
  }, []);

  return (
    <div className="items-center justify-center flex h-screen">
      <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 sm:shadow-md">
        <h1 className="mb-4 font-bold">{isEdit ? "Edit " : "Tambah "} Buku</h1>
        <form onSubmit={isEdit ? handleSubmitEdit : handleSubmitAdd}>
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
              value={formData && formData.title}
              onChange={isEdit ? handleChangeEdit : handleChangeAdd}
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
              value={formData && formData.isbn}
              onChange={handleChangeAdd}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="penerbit"
            >
              Penulis
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="penerbit"
              type="text"
              placeholder="penerbit"
              name="author"
              value={formData && formData.author}
              onChange={handleChangeAdd}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="publisher"
            >
              Publisher
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="publisher"
              type="text"
              placeholder="publisher"
              name="publisher"
              value={formData && formData.publisher}
              onChange={handleChangeAdd}
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
              value={formData && formData.description}
              onChange={handleChangeAdd}
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
              type="submit"
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
