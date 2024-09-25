import React from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import Content from "../Content/Content";

function Docs() {
  return (
    <div className="Docs">
      <DocsSidebar />
      <Content/>
    </div>
  );
}

export default Docs;
