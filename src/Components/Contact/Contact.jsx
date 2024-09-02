import React from "react";
import "./Contact.css";
import Line from "../Line/Line";

function Contact() {
  return (
    <div className="Contact">
      <h2>Request Demo</h2>
      <Line width={"3%"} borderWidth={"4px"} color={"#003E75"} />

      <div className="contact-form">
        <div className="half">
          <input type="text" placeholder="Name"/>
          <textarea name="" id="" placeholder="Subject"></textarea>
        </div>
        <div className="half">
          <input type="mail" placeholder="Email"/>
          <input type="text" placeholder="Address Line 1"/>
          <input type="mail" placeholder="Address Line 2"/>
            <div className="pincode-input">
              <input type="number" name="" id="" placeholder="Pin"/>
              <input type="number" placeholder="Phone +44"/>
            </div>
        </div>
      </div>
      <div className="submit-button-container">
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
