import React, { useContext } from "react";
import "./Technology.css";
import Card from "../Card/Card";
import Line from "../Line/Line";
import arch_diagram from "../../assets/technology/tech_architecture.png";
import ReferenceContext from "../../Context/ReferenceContext";
import { cardsContent } from "../../Configuration/Configuration";


function Technology() {
  const { ProductRef } = useContext(ReferenceContext);
  return (
    <div className="Technology" ref={ProductRef}>
      <h2>Our Technology</h2>
      <Line width={"3%"} borderWidth={"4px"} color={"#003E75"} />
      <div className="key-features">
        {cardsContent.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
      <div className="tech-arch">
        <img src={arch_diagram} alt="Error in loading..." />
      </div>
      <div className="btn-container">
        <button>Request a Demo</button>
      </div>
    </div>
  );
}

export default Technology;
