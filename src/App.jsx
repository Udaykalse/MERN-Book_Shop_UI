import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'





const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/edit/:id' element={<UpdateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
    <Footer/>
    </>

  )
}

export default App
