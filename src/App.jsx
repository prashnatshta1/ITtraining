import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './pages/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App