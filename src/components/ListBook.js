/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
// node_modules
import React from "react";
import { Link } from "react-router-dom";

const ListBook = ({ books }) => {
  return (
    <>
      {books &&
        books.map((book, index) => (
          <tr className="whitespace-nowrap" key={book.id}>
            <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900">{book.title}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">{book.isbn}</div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">{book.author}</td>
            <td className="px-6 py-4 text-sm text-gray-500">
              {book.description}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/edit/${book.id}`}
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
        ))}
    </>
  );
};

ListBook.displayName = "ListBook";

export default ListBook;
