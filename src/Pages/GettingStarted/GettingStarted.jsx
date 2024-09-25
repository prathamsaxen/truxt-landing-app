import React from "react";
import { useParams } from "react-router-dom";
import { docsContent } from "./DocsDataConfig";
import "../DocsPage.css";

const GettingStarted = () => {
  const { doc } = useParams(); // Get the route parameter
  const content = docsContent[doc]; // Access content based on route parameter
  console.log(doc);
  // If content is not found, you can handle it here (e.g., render a 404 page)

  return (
    <div className="docs-content-container">
      <div className="container">
        {content && (
          <>
            {content.sections.map((section, index) => (
              <section className="step" key={index}>
                <h2>{section.heading}</h2>
                {section.content.map((text, textIndex) => (
                  <React.Fragment key={textIndex}>
                    {typeof text === "string" ? (
                      <p>{text}</p>
                    ) : (
                      <>
                        <p>{text.subheading}</p>
                        <ul>
                          {text.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <strong>{item.text}</strong> {item.description}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </section>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;
