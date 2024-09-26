import React, { useState, useEffect } from "react";
import "./Common.css";
import DocContent from "../../Components/DocContent/DocContent";
import content from "../../MD/getting-started.md";
import ReactMarkdown from "react-markdown";

const GettingStarted = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <div className="content-page">
      <div className="content-layout markdown-container">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <DocContent />
    </div>
  );
};

export default GettingStarted;
