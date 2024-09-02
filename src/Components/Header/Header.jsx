import React from "react";
import "./Header.css";

const NavigationItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/",
    title: "Product",
  },
  {
    path: "/",
    title: "About",
  },
  {
    path: "/",
    title: "Request Demo",
  },
  {
    path: "/",
    title: "Contact",
  },
];

function Header() {
  return (
    <div className="Header">
      <div className="header-logo">
        <img src="" alt="Error in loading..." />
      </div>
      <nav>
        {NavigationItems.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              {item.title}
            </a>
          );
        })}
      </nav>
      <div className="client-login-button">
        <button>Client Login</button>
      </div>
    </div>
  );
}

export default Header;
