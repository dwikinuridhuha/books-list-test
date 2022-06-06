/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Table from "components/Table";
import Sidebar from "components/Sidebar";
import HeaderDashboard from "components/HeaderDashboard";

// context
import GlobalContext from "store/context";

const Buku = () => {
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);
  const [books, setBooks] = useState([]);

  const ambilData = (token) => {
    axios
      .get("http://159.223.57.121:8080/books?limit=5&offset=0", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("dataUser") !== null) {
      const getDataUserInLocalStorage = JSON.parse(
        localStorage.getItem("dataUser")
      );
      updateSampleGlobalVar(getDataUserInLocalStorage);
      ambilData(getDataUserInLocalStorage.token);
      console.log(getDataUserInLocalStorage);
    }

    if (sampleGlobalVar && sampleGlobalVar?.token) {
      ambilData(sampleGlobalVar?.token);
    }
  }, []);
  return (
    <>
      {/* {sampleGlobalVar && sampleGlobalVar?.token}
      {books && console.log(books)} */}
      <div>
        <HeaderDashboard />
      </div>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <div className="main-content flex flex-col flex-grow p-4">
            <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>
            <div className="flex flex-col flex-grow mt-4">
              <Table books={books} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

Buku.displayName = "Buku";

export default Buku;
