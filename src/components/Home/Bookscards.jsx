// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BiUserCircle } from 'react-icons/bi';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { PiBookOpenTextLight } from 'react-icons/pi';
import BookSingleCard from './BookSingleCard';

const Bookscards = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
      {books.map((item) => (
       <BookSingleCard key={ClipboardItem._id} book={item}/>
      ))}
    </div>
  );
};

export default Bookscards;
