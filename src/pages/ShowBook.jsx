import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "./../components/BackButton";
import Spinner from "./../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5005/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        book && (
          <div className="mt-6 max-w-3xl mx-auto bg-white border border-gray-200 shadow-lg rounded-xl p-6 transition-all duration-500 ease-in-out hover:shadow-2xl">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 animate-fade-in-down">
              📖 Book Details
            </h1>
            <div className="space-y-4">
              {/* ID */}
              <div className="flex items-center gap-4 animate-slide-in-left">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  ID:
                </span>
                <span className="text-lg text-gray-800 break-all">
                  {book._id}
                </span>
              </div>
              {/* Title */}
              <div className="flex items-center gap-4 animate-slide-in-right">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  Title:
                </span>
                <span className="text-lg text-gray-800">{book.title}</span>
              </div>
              {/* Author */}
              <div className="flex items-center gap-4 animate-slide-in-left">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  Author:
                </span>
                <span className="text-lg text-gray-800">{book.author}</span>
              </div>
              {/* Publisher */}
              <div className="flex items-center gap-4 animate-slide-in-right">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  Published Year:
                </span>
                <span className="text-lg text-gray-800">
                  {book.publishYear}
                </span>
              </div>
              {/* Create Time */}
              <div className="flex items-center gap-4 animate-slide-in-left">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  Created At:
                </span>
                <span className="text-lg text-gray-800">
                  {new Date(book.createdAt).toLocaleString()}
                </span>
              </div>
              {/* Update Time */}
              <div className="flex items-center gap-4 animate-slide-in-right">
                <span className="text-xl font-medium text-gray-600 w-1/3">
                  Last Updated At:
                </span>
                <span className="text-lg text-gray-800">
                  {new Date(book.updatedAt || book.createdAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ShowBook;
