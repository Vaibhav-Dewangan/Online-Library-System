import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {
 
  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
