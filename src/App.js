import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
// import Index from './components/homepage/Index'
import Homepage from './components/homepage/Index'
// we using default we canv wasily change the name
const App = () => {
  return (
    <>
     <h1 className='heading-lg'>heading</h1>
      <Header/>
      {/* <Index/> */}
      <Homepage/>
      <Footer/>
    </>
    
  )
}

export default App
