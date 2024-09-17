import React from "react";
import { NavLink } from "react-router-dom";
import { docsLinks } from "../../Configuration/Configuration";
import "./DocsSidebar.css";

const DocsSidebar = () => {
  return (
    <div className="docs-side-bar">
      <div className="docs-sidebar-listing">
        {docsLinks.map((doc, index) => (
          <li key={index}>
            <h4 className="docs-sidebar-headings">{doc.type}</h4>
            <ul>
              {doc.links.map((link, linkIndex) => (
                <li key={linkIndex} className="docs-sidebar-list-item">
                  <NavLink to={`/docs/${link.path}`} className={"docs-link"}  activeclassname="active" >{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DocsSidebar;
