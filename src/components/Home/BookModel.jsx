import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-modalOverlay flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[90%] max-w-modal bg-modalBg rounded-modal p-6 shadow-modal relative animate-popup"
      >
        <AiOutlineClose
          className="absolute right-4 top-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex flex-col items-center text-center">
          <h2 className="bg-blue-100 text-blue-800 px-4 py-1 rounded-md mb-4">
            {book.publishYear}
          </h2>
          <h4 className="text-gray-500 text-sm mb-4">{book._id}</h4>
          <div className="flex items-center gap-x-2 mb-2">
            <PiBookOpenTextLight className="text-blue-400 text-2xl" />
            <h2 className="text-xl font-bold">{book.title}</h2>
          </div>
          <div className="flex items-center gap-x-2 mb-2">
            <BiUserCircle className="text-blue-400 text-2xl" />
            <h2 className="text-lg">{book.author}</h2>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            deserunt deleniti perferendis voluptate est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
