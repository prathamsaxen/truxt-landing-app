import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import "./Docs.css"
import GettingStarted from "../GettingStarted/GettingStarted";

function Docs() {
  return (
    <div className="docs-page">
      <DocsSidebar/>
      <div className="info-pages">
        <Routes>
          <Route path="getting-started" element={<GettingStarted/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Docs;
