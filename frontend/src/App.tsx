import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MyCarousel from './components/Carousel/Carousel'
import ImageGrid from './components/ImageGrid/ImageGrid' 
import Banner from './components/Banner/Banner' 
import Footer from './components/Footer/Footer' 

function App() {
  return (
    <>
      <NavBar />
      <MyCarousel />
      <ImageGrid />
      <Banner />
      <Footer />
    </>
  )
}

export default App
