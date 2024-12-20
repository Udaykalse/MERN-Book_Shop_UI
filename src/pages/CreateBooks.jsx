import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from './../components/BackButton';
import Spinner from "../components/Spinner";

const CreateBooks = () => {
  const [loading, setLoading] = useState(false); // Track loading state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true); // Start loading state
    try {
      await axios.post("http://localhost:5005/books", data);
      toast.success("Book created successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/");
    } catch (error) {
      toast.error("An error occurred, please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
      console.error(error);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Back Button */}
      <BackButton />
      
      <h1 className="text-2xl font-bold mb-4">Create Book</h1>
      
      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center mb-4">
          <Spinner />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            id="author"
            type="text"
            {...register("author", { required: "Author is required" })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.author && (
            <p className="text-sm text-red-500 mt-1">{errors.author.message}</p>
          )}
        </div>

        {/* Publish Year */}
        <div className="mb-4">
          <label htmlFor="publishYear" className="block text-sm font-medium text-gray-700">
            Publish Year
          </label>
          <input
            id="publishYear"
            type="number"
            {...register("publishYear", {
              required: "Publish Year is required",
              min: { value: 1000, message: "Enter a valid year" },
            })}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {errors.publishYear && (
            <p className="text-sm text-red-500 mt-1">{errors.publishYear.message}</p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            disabled={loading} // Disable the button when loading
          >
            Save Book
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default CreateBooks;
