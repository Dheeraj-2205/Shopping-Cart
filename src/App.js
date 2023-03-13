import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// import Index from './components/homepage/Index'
import Homepage from './components/homepage/Index'
// we using default we canv wasily change the name
import MainSlider from './components/mainSlider/MainSlider'
const App = () => {
  return (
    <>
    
     
      <Header/>
      <MainSlider/>
      <Homepage/>
      <Footer/>
    </>
    
  )
}

export default App
