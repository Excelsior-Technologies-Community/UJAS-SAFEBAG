import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Homepage"
import Footer from "./components/Footer"


// import './App.css'

function App() {
 

  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Footer/>
     
    </>
  )
}

export default App
