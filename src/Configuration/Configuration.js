import vision_image from "../assets/truxt/our_vision_icon.svg";
import story_image from "../assets/truxt/our_story_icon.svg";
import technology_image from "../assets/truxt/our_technology_icon.svg";

import twitter_icon from "../assets/socialmedia/twitter_icon.svg";
import linkedin_icon from "../assets/socialmedia/linked_in.svg";

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

const Links = [
  {
    path: "",
    title: "Product",
  },
  {
    path: "",
    title: "About",
  },
  {
    path: "",
    title: "Contact",
  },
  {
    path: "",
    title: "Request a Demo",
  },
];

const socialLinks = [
  {
    path: "",
    icon: twitter_icon,
  },
  {
    path: "",
    icon: linkedin_icon,
  },
];

export { cardsContent, VisionContent, socialLinks, Links };
