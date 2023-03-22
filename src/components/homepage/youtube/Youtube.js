import React from "react";
import "./youtube.css";
const Youtube = () => {
  return (
    <>
      <div className="dvYoutube" style={{background:"url(https://static.wixstatic.com/media/2c0034_fc43f01850924a8e9cf5695d060ff42f~mv2.png)"}}>
        <div className="opacity">
          <h2 className="heading-lg">Only Juice Nothing Else</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            veniam nostrum asperiores esse amet facere cumque voluptates
            consequatur voluptate, mollitia quo doloremque nihil aliquid,
            maiores reiciendis. Necessitatibus voluptatum quos enim.
          </p>
          <button>
            <i className="fa-solid fa-play"></i>
         </button>
        </div>
      </div>
    </>
  );
};

export default Youtube;