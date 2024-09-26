import React from "react";
import "./DocsHeader.css";
import logo from "../../assets/header/truxt_logo_login.png";
import { NavLink } from "react-router-dom";

function DocsHeader() {
  const NavigationItems = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "http://dev.truxt.xyz/",
      title: "Sandbox",
    },
  ];

  return (
    <div className="Docs-Header">
      <div className="left-docs-header">
        <img src={logo} alt="Error in loading..." />
      </div>
      <div className="right-docs-header">
        <input type="search" name="Search" id="" placeholder="Search in docs" />
        <nav>
          <ul>
            {NavigationItems.map((item, _) => {
              return (
                <NavLink to={item.path} key={item.title}>
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default DocsHeader;
