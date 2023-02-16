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
     <button className='btn'>button</button>
     <button className='btn btn-black'>button</button>
     <button className='btn btn-disable'>button</button>
     <table>
      <tr>
        <th>dheeraj heading</th>
        <th>dheeraj heading</th>
        <th>dheeraj heading</th>
      </tr>
      <tr>
        <td>one</td>
        <td>one</td>
        <td>one</td>
      </tr>
     </table>
     <select className = 'f-controls'>
      <option>1</option>
      <option>1</option>
      <option>1</option>
      <option>1</option>
      <option>1</option>
     </select>
     <input type = 'text' className='f-controls'/>
      <Header/>
      {/* <Index/> */}
      <Homepage/>
      <Footer/>
    </>
    
  )
}

export default App
