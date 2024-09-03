import React, { useContext } from "react";
import "./Truxt.css";
import Line from "../Line/Line";
import { VisionCard } from "../Card/Card";
import ReferenceContext from "../../Context/ReferenceContext";
import { VisionContent } from "../../Configuration/Configuration";

function Truxt() {
  const { AboutRef } = useContext(ReferenceContext);
  return (
    <div className="Truxt" ref={AboutRef}>
      <h2>MEET TRUXT</h2>
      <Line width={"3%"} borderWidth={"4px"} color={"white"} />
      <div className="vision-container">
        {VisionContent.map((item, index) => {
          return <VisionCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Truxt;
