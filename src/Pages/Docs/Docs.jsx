import React from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import GettingStarted from "../ContentPages/GettingStarted";
import { Routes, Route } from "react-router-dom";

function Docs() {
  return (
    <div className="Docs">
      <DocsSidebar />
      <div className="content">
        <Routes>
          <Route path="/getting-started" element={<GettingStarted />} />
        </Routes>
      </div>
    </div>
  );
}

export default Docs;
