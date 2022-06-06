/* eslint-disable react/button-has-type */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "store/context";
import axios from "axios";

const ListBook = ({ books }) => {
  const { sampleGlobalVar } = useContext(GlobalContext);
  const deleteBookById = (id) => {
    axios
      .delete(
        `http://159.223.57.121:8080/books/${id}`,
        { id },
        {
          headers: {
            Authorization: `${sampleGlobalVar.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };
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
              <button
                onClick={() => deleteBookById(book.id)}
                className="px-4 py-1 text-sm text-white bg-red-400 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

ListBook.displayName = "ListBook";

export default ListBook;
