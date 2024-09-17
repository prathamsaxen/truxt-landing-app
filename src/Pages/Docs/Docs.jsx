import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import DocsSidebar from "../../Components/DocsSidebar/DocsSidebar";
import "./Docs.css"
import Security from "../Security/Security";
import GettingStarted from "../GettingStarted/GettingStarted";
import AddToWorkspace from "../AddToWorkspace/AddToWorkspace";
import Services from "../Services/Services";
import TruxtAsSaas from "../TruxtAsSaas/TruxtAsSaas";
import IntegrareWithYourBusiness from "../IntegrateWithYourBusiness/IntegrareWithYourBusiness";

function Docs() {
  return (
    <div className="docs-page">
      <DocsSidebar/>
      <div className="info-pages">
        <Routes>
          <Route path="getting-started" element={<GettingStarted/>} />
          <Route path="security" element={<Security/>} />
          <Route path="services" element={<Services/>} />
          <Route path="turxt-as-saas" element={<TruxtAsSaas/>} />
          <Route path="add-to-your-workspace" element={<AddToWorkspace/>} />
          <Route path="integrate-it-with-your-business" element={<IntegrareWithYourBusiness/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Docs;
