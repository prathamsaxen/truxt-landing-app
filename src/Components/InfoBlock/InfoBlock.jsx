import React from "react";
import "./InfoBlock.css";
import { IoInformationCircleOutline } from "react-icons/io5";

const InfoBlock = ({ text }) => {
  return (
    <div className="info-block">
      <div>
        <IoInformationCircleOutline className="info-block-icon"/>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default InfoBlock;
