import {Link} from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({destination ='/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className='text-2xl text-gray-500 hover:text-gray-700
        transition duration-300 ease-in-out'/>
        </Link>
    </div>
  )
}

export default BackButton
