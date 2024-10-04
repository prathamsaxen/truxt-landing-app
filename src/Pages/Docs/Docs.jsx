import React, { useState, useEffect } from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import DocsHeader from "../../Components/DocsHeader/DocsHeader";
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import getMarkdownContent from "../../utils/FetchMarkDownContent";
import DocContent from "../../Components/DocContent/DocContent";

// Custom hook for typing animation
function useTypingAnimation(content, speed = .1) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!content) return;

    let currentIndex = 0;
    setDisplayedText(""); // Reset displayed text when content changes

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + content[currentIndex]);
      currentIndex++;

      if (currentIndex === content.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [content, speed]);

  return displayedText;
}

function Docs() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const markdownContent = await getMarkdownContent(id);
      setContent(markdownContent);
    };
    fetchContent();
  }, [id]);

  // Using the typing animation hook
  const animatedContent = useTypingAnimation(content);

  return (
    <>
      <DocsHeader />
      <div className="Docs">
        <DocsSidebar />
        <div className="content-layout">
          <div className="content">
            {/* Render markdown with typing animation */}
            <ReactMarkDown>{animatedContent}</ReactMarkDown>
          </div>
          <DocContent content={content} />
        </div>
      </div>
    </>
  );
}

export default Docs;
