import React from "react";
import "../App.css";
function Banner(props){
  return (
    <div className="banner-container">
      <div>
        <h2>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button className="button">TELL ME MORE</button>
      </div>
    </div>
  );
};

export default Banner;