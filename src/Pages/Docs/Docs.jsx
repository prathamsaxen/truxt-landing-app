import React, { useState, useEffect } from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import DocsHeader from "../../Components/DocsHeader/DocsHeader";
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import getMarkdownContent from "../../utils/FetchMarkDownContent";
import DocContent from "../../Components/DocContent/DocContent";

function Docs() {
  const { id } = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const markdownContent = await getMarkdownContent(id);
      setContent(markdownContent);
    };
    fetchContent();
    console.log(content);
  }, [id]);

  return (
    <>
      <DocsHeader />
      <div className="Docs">
        <DocsSidebar />
        <div className="content-layout">
          <div className="content">
            <ReactMarkDown>{content}</ReactMarkDown>
          </div>
          <DocContent content={content}/>
        </div>
      </div>
    </>
  );
}

export default Docs;
