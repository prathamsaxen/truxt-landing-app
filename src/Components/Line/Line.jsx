import React from "react";
import "./Line.css";

function Line({ width, color, borderWidth }) {
  return (
    <div
      className="Line"
      style={{ borderColor: color, width: width, borderWidth: borderWidth }}
    ></div>
  );
}

export default Line;