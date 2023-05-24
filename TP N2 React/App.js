import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'

export const App = () => {
  return (
    <div className="row">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}

export default App
