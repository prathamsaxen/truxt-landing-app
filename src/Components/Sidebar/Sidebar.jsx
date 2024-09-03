import React, { useContext } from "react";
import "./Sidebar.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ReferenceContext from "../../Context/ReferenceContext";

function Sidebar({ setSidebarDisplay }) {
  const { HomeRef, ProductRef, AboutRef, ContactRef } = useContext(ReferenceContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollFunction=(input)=>{
    scrollToSection(input);
    setSidebarDisplay(false);
  }

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
    <div className="Sidebar">
      <div className="crossIcon">
        {/* <p>Truxt</p> */}
        <IoMdCloseCircleOutline onClick={() => setSidebarDisplay(false)} />
      </div>

      <div className="navigation-links">
        {NavigationItems.map((item, index) => {
          return (
            <p key={index} onClick={() => scrollFunction(item.path)}>
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
