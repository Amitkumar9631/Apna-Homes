import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
