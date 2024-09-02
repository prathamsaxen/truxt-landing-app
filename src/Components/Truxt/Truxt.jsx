import React from "react";
import "./Truxt.css";
import Line from "../Line/Line";
import vision_image from "../../assets/truxt/our_vision_icon.svg";
import story_image from "../../assets/truxt/our_story_icon.svg";
import technology_image from "../../assets/truxt/our_technology_icon.svg";
import { VisionCard } from "../Card/Card";

const VisionContent = [
  {
    logo: vision_image,
    title: "Our Vision",
    content:
      "Pioneering the evloution of AI-driven Customer Operations, Truxt is dedicated to delivering innovative, scalable, high accuracy solutions for global business challanges.",
  },
  {
    logo: story_image,
    title: "Our Story",
    content:
      "That was founded by Customer Experience industry veterans with an aim to help enterprises transform Customer Experince, especially support with world-class generative AI technology. Truxt is commited to providing exceptional accurate, secure, and scalable intellogent automation catered to each clients specific business needs.",
  },
  {
    logo: technology_image,
    title: "Our Technology",
    content:
      "Our advanced, pre-trained Generative AI Platform integrates diverse data for tailored, intelligent interactions, thereby redefining enterprise support efficiency with higher accuracy and eliminating hallucinations. It customized experiences to meet individual customer needs, ensuring each interaction in both intelligent and responsive",
  },
];

function Truxt() {
  return (
    <div className="Truxt">
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
