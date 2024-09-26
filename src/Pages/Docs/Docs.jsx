import React from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import DocsHeader from "../../Components/DocsHeader/DocsHeader";


function Docs() {

  return (
    <>
      <DocsHeader />
      <div className="Docs">
        <DocsSidebar />
        <div className="content">{/* <Routes></Routes> */}</div>
      </div>
    </>
  );
}

export default Docs;
