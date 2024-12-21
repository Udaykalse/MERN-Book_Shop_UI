import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import BookModal from "./BookModel";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="group bg-white border border-gray-200 shadow-md rounded-xl p-5 flex flex-col gap-3 
    hover:shadow-2xl hover:border-blue-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        <PiBookOpenTextLight className="text-blue-400" /> {book.title}
      </h2>

      <p className="text-gray-700 flex items-center gap-2">
        <BiUserCircle className="text-green-400" /> Author: {book.author}
      </p>

      <p className="text-gray-600">
        Published Year: <span className="font-medium">{book.publishYear}</span>
      </p>

      <p className="text-sm text-gray-400">
        Created At: {new Date(book.createdAt).toLocaleDateString()}
      </p>

      <div className="flex justify-end gap-4 mt-4 border-t pt-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer 
        "
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle
            className="text-blue-500 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110"
            title="View Details"
          />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            className="text-green-500 hover:text-green-700 text-2xl transition-transform transform hover:scale-110"
            title="Edit Book"
          />
        </Link>
        <button onClick={() => console.log("Delete", book._id)}>
          <AiOutlineDelete
            className="text-red-500 hover:text-red-700 text-2xl transition-transform transform hover:scale-110"
            title="Delete Book"
          />
        </button>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
