import React, { useContext } from "react";
import "./Hero.css";
import scrollIcon from "../../assets/hero/scroll_down_icon.svg";
import ReferenceContext from "../../Context/ReferenceContext";

function Hero() {
  const { HomeRef, ContactRef } = useContext(ReferenceContext);
  return (
    <div className="Hero" ref={HomeRef}>
      <h1>
        Empowering <br /> 
        <span>Customer Support</span>
        <br /> With <span>Gen AI</span>
      </h1>
      <img src={scrollIcon} alt="Error in loading" onClick={()=>ContactRef.current.scrollIntoView({ behavior: "smooth" })}/>
    </div>
  );
}

export default Hero;
