import React from 'react'
import MainSlider from './mainslider/MainSlider'
import Team from './team/Team'
import Youtube from './youtube/Youtube'
import About from "./about/About"
import ProductSlider from "./productslider/Productslider"
const Index = () => {
  return( 
    <>
      <MainSlider/>
      <Youtube/>
      <About/>
      <ProductSlider/>
      <Team/>
    </>
  )
}

export default Index