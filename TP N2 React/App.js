import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Main />
      <Footer />
     
    </div>
  )
}

export default App
