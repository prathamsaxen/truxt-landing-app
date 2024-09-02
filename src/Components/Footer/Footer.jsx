import React from "react";
import "./Footer.css";
import logo from "../../assets/header/truxt_logo_login.png";
import mail_icon from "../../assets/footer/mail_icon.svg";
import location_icon from "../../assets/footer/location_icon.svg";
import twitter_icon from "../../assets/socialmedia/twitter_icon.svg";
import linkedin_icon from "../../assets/socialmedia/linked_in.svg";

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

const socialLinks=[
  {
    path:"",
    icon:twitter_icon,
  },
  {
    path:"",
    icon:linkedin_icon,
  }
]

function Footer() {
  return (
    <div className="Footer">
      <div className="left-footer">
        <img src={logo} alt="Error in Loading" />
        <div className="mail-account-container">
          <div className="location-wrapper">
            <img src={location_icon} alt="Error in loading" srcset="" />
            <p>New Jersey</p>
          </div>
          <div className="location-wrapper">
            <img src={mail_icon} alt="Error in loading" srcset="" />
            <p>hello@truxt.ai</p>
          </div>
        </div>
      </div>
      <div className="right-footer">
        <div className="footer-links-wrapper">
          <h4>Links</h4>
          {Links.map((item, index) => {
            return (
              <a href={item.path} key={index}>
                {item.title}
              </a>
            );
          })}
        </div>
        <div className="social-media-wrapper">
          <h4>Connect with us</h4>
          {
            socialLinks.map((item,index)=>{
              return <img src={item.icon} key={index} alt="Error in loading..."/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Footer;
