import React from "react";
import "./Technology.css";
import Card from "../Card/Card";
import Line from "../Line/Line";

const cardsContent = [
  {
    title: "Accuracy",
    content:
      "Truxt combines ist deep experties in customer Experience with advanced GenAI to deliever superior accuracy. Our Pre-trained GenAI Platform comprehensively analyzes various knowledge bases, providing precise understanding of customer inquiries for relevant and accurate responses. This enhances customer satisfaction and trust is our automated solutions. ",
  },
  {
    title: "security",
    content:
      "Truxt is committed to data security. 'Your Organization's data stays within your boundaries, ensuring absolute confidentiality and control.' We implement stringent data protection measures to securely manage organization data, protecting sensitive customer and busniess information within the enterprise.  ",
  },
  {
    title: "Scalability",
    content:
      "Truxt's AI workforce operates 24/7 eliminating wait times and staffing issues. Our highly scalable platform efficiently manages growing support volumes, maintaining quality  while being cost-effective. this makes it an ideal choice for growing businesses seeking dependable, scalable customer support solutions. ",
  },
];

function Technology() {
  return (
    <div className="Technology">
      <h2>Our Technology</h2>
      <Line width={"3%"} borderWidth={"4px"} color={"#003E75"} />
      <div className="key-features">
        {cardsContent.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Technology;
