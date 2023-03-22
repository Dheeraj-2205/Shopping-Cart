import React from 'react'
import "../mainSlider/mainSlider.css"
const MainSlider = () => {
  return (
    <div className="dvMainSlider d-flex align-items-center">
       <div className="container">
        <div className="row">
            <div className="col-md-6 text-center">
                <img src="https://static.wixstatic.com/media/2c0034_5916d66c114c4a3fb055fd0fff15f402~mv2.png" 
                    alt="" 
                    className="img-fluid"
                 />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex flex-column align-items-start justify-content-center">
                <h1>Valencia Orange</h1>
                <p className='py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit odio nam, ad numquam provident
                    cupiditate sapiente magni architecto aspernatur. Facilis consectetur placeat rem. Sint mollitia corporis quo quidem non!
                </p>
                <button className='btn btn-black text-center'>Shop</button>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default MainSlider