import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DeleteBook = ({ bookId }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);  // Show loader
      await axios.delete(`http://localhost:5005/books/${bookId}`);
      toast.success('Book deleted successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });
      // Optionally, you can navigate away or update state to reflect the deletion
    } catch (error) {
      toast.error('Failed to delete the book. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
      console.error(error);
    } finally {
      setLoading(false); // Hide loader after the request is completed
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={loading}
        className={`bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:bg-gray-400`}
      >
        {loading ? 'Deleting...' : 'Delete Book'}
      </button>
    </div>
  );
};

export default DeleteBook;
