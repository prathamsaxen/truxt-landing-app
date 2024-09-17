import React from "react";
import InfoBlock from "../Components/InfoBlock/InfoBlock";
import CodeContainer from "../Components/CodeContainer/CodeContainer";

export const formatContent = (content) => {
  return content.map((contentItem, contentIndex) => {
    if (contentItem.type === "p") {
      return <p key={contentIndex}>{contentItem.data}</p>;
    }
    if (contentItem.type === "info") {
      return <InfoBlock key={contentIndex} text={contentItem.data} />;
    }
    if (contentItem.type === "code") {
      return <CodeContainer key={contentIndex} code={contentItem.data} />;
    }
    if (contentItem.type === "ul" && Array.isArray(contentItem.data)) {
      return (
        <ul key={contentIndex}>
          {contentItem.data.map((listItem, listIndex) => (
            <li className="docs-listing-item" key={listIndex}>
              {listItem}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
};
