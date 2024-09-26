import React from "react";
import "./Docs.css";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import GettingStarted from "../ContentPages/GettingStarted";
import { Routes, Route } from "react-router-dom";
import Privacy from "../ContentPages/Privacy";
import WhyTruxt from "../ContentPages/WhyTruxt";
import ReactDocs from "../ContentPages/ReactDocs";
import JSSnippet from "../ContentPages/JSSnippet";
import CommonSnippet from "../ContentPages/CommonSnippet";
import Pricing from "../ContentPages/Pricing";
import Project from "../ContentPages/Project";
import Feedback from "../ContentPages/Feedback";
import Error404 from "../ContentPages/Error404";

function Docs() {
  return (
    <div className="Docs">
      <DocsSidebar />
      <div className="content">
        <Routes>
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/why-truxt" element={<WhyTruxt />} />
          <Route path="/react" element={<ReactDocs />} />
          <Route path="/js-snippet" element={<JSSnippet />} />
          <Route path="/common-snippet" element={<CommonSnippet />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/project" element={<Project />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default Docs;
