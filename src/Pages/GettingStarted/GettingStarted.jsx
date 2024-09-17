import React from "react";
import "../DocsPage.css";
import { GettingStartedData } from "../../Configuration/DocsData";
import { formatContent } from "../../utils/FormatDocsContent";

const GettingStarted = () => {
  return (
    <div className="docs-content-container">
      <p className="doc-type-heading">{GettingStartedData.docTypeHeading}</p>
      {GettingStartedData.data.map((item, index) => {
        const HeadingTag = item.headingType;

        return (
          <div key={index}>
            <HeadingTag className="docs-headings">{item.heading}</HeadingTag>
            {formatContent(item.content)}
          </div>
        );
      })}
    </div>
  );
};

export default GettingStarted;
