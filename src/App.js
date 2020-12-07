import React from 'react'
import Display from './components/Display'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

export default function App() {
  return (
      <div className="App">
        <Header />
        <Display />
        <Footer />
      </div>
  )
}

