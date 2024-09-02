import React from "react";
import "./Hero.css";
import scrollIcon from "../../assets/hero/scroll_down_icon.svg";

function Hero() {
  return (
    <div className="Hero">
      <h1>
        Empowering <br />
        <span>Customer Support</span>
        <br /> With <span>Gen AI</span>
      </h1>
      <img src={scrollIcon} alt="Error in loading" />
    </div>
  );
}

export default Hero;
