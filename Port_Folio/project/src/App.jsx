import React from 'react'
import './index.css'
import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App