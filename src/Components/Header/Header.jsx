import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/header/truxt_logo_login.png";
import ReferenceContext from "../../Context/ReferenceContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ setSidebarDisplay }) {
  const { HomeRef, ProductRef, AboutRef, ContactRef } = useContext(ReferenceContext);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (ref) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
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
      <img src={logo} alt="Error in loading..." />
      <nav>
        {NavigationItems.map((item, index) => {
          return (
            <p onClick={() => scrollToSection(item.path)} key={index}>
              {item.title}
            </p>
          );
        })}
      </nav>
      <div className="client-login-button">
        <button>Client Login</button>
      </div>
      <GiHamburgerMenu className="burger-icon" onClick={() => setSidebarDisplay(true)} />
    </div>
  );
}

export default Header;
