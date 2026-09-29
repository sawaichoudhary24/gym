import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Featuees from './components/Featuees';
import About from './components/About';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Traners from './components/Traners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      <Navbar activeSection={activeSection}/>
      <main>
        <Hero/>
       <Featuees/>
       <About />
       <Classes/>
       <Pricing/>
       <Traners/>
       <Testimonials/>
       <Contact/>
       <Footer/>
       <ScrollToTop/>
      </main>
    </div>
  )
}

export default App
