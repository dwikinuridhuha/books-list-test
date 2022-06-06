/* eslint-disable jsx-a11y/img-redundant-alt */
// node_modules
import Table from "components/Table";
import Sidebar from "components/Sidebar";
import HeaderDashboard from "components/HeaderDashboard";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";

// context
import GlobalContext from "store/context";

const Buku = () => {
  // eslint-disable-next-line no-unused-vars
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);

  return (
    <>
      <div>
        <HeaderDashboard />
      </div>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <div className="main-content flex flex-col flex-grow p-4">
            <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>
            <div className="flex flex-col flex-grow mt-4">
              <Table />
            </div>
          </div>
          <footer className="footer px-4 py-6">
            <div className="footer-content">
              <p className="text-sm text-gray-600 text-center">
                © Brandname 2020. All rights reserved.
                <a href="https://twitter.com/iaminos">by iAmine</a>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

Buku.displayName = "Buku";

export default Buku;
