import React from "react";
import "./DocsSidebar.css";
import { NavLink } from "react-router-dom";

// JSON data structure
const sidebarData = {
  overview: {
    title: "Overview",
    links: [
      { name: "Getting Started", path: "/docs/getting-started" },
      { name: "Privacy", path: "/docs/privacy" },
      { name: "Why Truxt?", path: "/docs/why-truxt" },
    ],
  },
  uiComponent: {
    title: "UI Component",
    links: [
      { name: "React", path: "/docs/react-snippet" },
      { name: "JS Snippet", path: "/docs/js-snippet" },
      { name: "Common Settings", path: "/docs/common-settings" },
    ],
  },
  truxt: {
    title: "Truxt",
    links: [
      { name: "Pricing", path: "/docs/pricing" },
      { name: "Project", path: "/docs/project" },
      { name: "Feedback", path: "/docs/feedback" },
    ],
  },
};

function DocsSidebar() {
  return (
    <div className="docs-sidebar">
      {Object.keys(sidebarData).map((sectionKey) => {
        const section = sidebarData[sectionKey];
        return (
          <div key={section.title}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default DocsSidebar;
