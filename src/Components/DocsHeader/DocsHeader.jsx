import React from 'react';
import "./DocsHeader.css";
import logo from "../../assets/header/truxt_logo_login.png";

function DocsHeader() {
  return (
    <div className='Docs-Header'>
      <div className="left-docs-header">
        <img src={logo} alt="Error in loading..." />
      </div>
    </div>
  )
}

export default DocsHeader
