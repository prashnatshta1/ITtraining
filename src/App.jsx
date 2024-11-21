import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './pages/Footer/Footer'
import Header from './components/Header/Header'
import InternshipOpportunity from './pages/Internship/InternshipOpportunity'
import ApplyTeaching from './pages/Hiring/ApplyTeaching'
import ContactUs from './pages/ContactUs/ContactUs'
import ContactForm from './pages/ContactForm/ContactForm'
import UI from './pages/EventPages/UI/Ui'
import Python from './pages/EventPages/Python/Python'
import DigitalMarketing from './pages/EventPages/DigitalMarketing/DigitalMarketing'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/internship" element={<InternshipOpportunity />} />
        <Route path= "/applyteaching" element={<ApplyTeaching />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/UI" element={<UI />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />

      </Routes>
      <Footer />
      
    </div>
  )
}

export default App