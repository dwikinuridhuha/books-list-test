// node_modules
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import GlobalContext from "store/context";

const Table = () => {
  // eslint-disable-next-line no-unused-vars
  const { sampleGlobalVar, updateSampleGlobalVar } = useContext(GlobalContext);

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
          <tr className="whitespace-nowrap">
            <td className="px-6 py-4 text-sm text-gray-500">1</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">Jon doe</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">jhondoe@example.com</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
            <td className="px-6 py-4">
              <Link
                href="/tambah"
                className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
              >
                Edit
              </Link>
            </td>
            <td className="px-6 py-4">
              <Link
                href="/tambah"
                className="px-4 py-1 text-sm text-white bg-red-400 rounded"
              >
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

Table.displayName = "Table";

export default Table;
