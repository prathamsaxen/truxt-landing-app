import React from "react";
import "./DocContent.css";
import { extractSubHeadings } from "../../utils/FetchMarkDownContent";
const DocContent = ({ content }) => {
  return (
    <div className="doc-content">
      <h2>Page Content</h2>
      <ul>
        {extractSubHeadings(content).map((item, _) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DocContent;
