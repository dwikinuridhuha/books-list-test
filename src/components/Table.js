/* eslint-disable react/prop-types */
// node_modules
import React from "react";
import { Link } from "react-router-dom";

import ListBook from "./ListBook";

const Table = ({ books }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          to="/tambah"
        >
          Tambah
        </Link>

        <input
          id="search"
          type="text"
          name="search"
          className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-400"
          placeholder="Search..."
        />
      </div>
      <table>
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-2 text-xs text-gray-500">No</th>
            <th className="px-6 py-2 text-xs text-gray-500">Judul</th>
            <th className="px-6 py-2 text-xs text-gray-500">ISBN</th>
            <th className="px-6 py-2 text-xs text-gray-500">Penerbit</th>
            <th className="px-6 py-2 text-xs text-gray-500">Deskripsi</th>
            <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
            <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <ListBook books={books} />
        </tbody>
      </table>
    </>
  );
};

Table.displayName = "Table";

export default Table;
