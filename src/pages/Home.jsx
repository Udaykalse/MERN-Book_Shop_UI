import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Bookscards from "../components/Home/Bookscards";
import BookTable from "../components/Home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  // http://localhost:5005/books
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5005/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-600 px-4 rounded-lg"
          onClick={() => setShowType("cards")}
        >
          Cards
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Books</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BookTable books={books} />
      ) : (
        <Bookscards books={books} />
      )}
    </div>
  );
};

export default Home;
