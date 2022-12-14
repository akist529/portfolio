import Header from './header.js'
import Landing from './landing.js'
import About from './about.js'
import Portfolio from './portfolio.js'
import Contact from './contact.js'
import './App.scss'
import React from 'react'

function App () {
  return (
    <div id="app">
      <Header />
      <div id="content">
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default App
