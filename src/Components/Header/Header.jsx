import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/header/truxt_logo_login.png";
import ReferenceContext from "../../Context/ReferenceContext";
// import NavigationItems from "../../Configuration/Configuration";



function Header() {
  const { HomeRef, ProductRef, AboutRef, ContactRef } = useContext(ReferenceContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const NavigationItems = [
    {
      path: HomeRef,
      title: "Home",
    },
    {
      path: ProductRef,
      title: "Product",
    },
    {
      path: AboutRef,
      title: "About",
    },
    {
      path: ContactRef,
      title: "Request Demo",
    },
    {
      path: ContactRef,
      title: "Contact",
    },
  ];

  return (
    <div className="Header">
      <img
        src={logo}
        alt="Error in loading..."
      />
      <nav>
        {NavigationItems.map((item, index) => {
          return (
            <p onClick={()=>scrollToSection(item.path)} key={index}>
              {item.title}
            </p>
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
