import React from "react";
import { NavLink } from "react-router-dom";
import "./DocsSidebar.css";
import DocsSidebarData from "./DocsSidebarConfig";

const DocsSidebar = () => {
  return (
    <div className="docs-side-bar">
      <ul>
        {DocsSidebarData.map((item, index) => {
          if (item.type === "heading") {
            return (
              <li key={index} className="heading">
                <h2>{item.title}</h2>
              </li>
            );
          }

          if (item.type === "item") {
            const IconComponent = item.icon;
            return (
              <li key={index} className="sidebar-item">
                <NavLink to={item.link}>
                  <IconComponent />
                  {item.title}
                </NavLink>
              </li>
            );
          }

          return null; 
        })}
      </ul>
    </div>
  );
};

export default DocsSidebar;
