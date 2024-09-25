import CircularProgress from "@mui/material/CircularProgress";
import { useRef, useState, Suspense, lazy } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ReferenceContext from "./Context/ReferenceContext";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy loading components
const Home = lazy(() => import("./Pages/Home/Home"));
const Docs = lazy(() => import("./Pages/Docs/Docs"));

function Layout() {
  const HomeRef = useRef(null);
  const ProductRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const [sidebarDispaly, setSidebarDisplay] = useState(false);
  const [AIContainer, setAIContainer] = useState(false);

  return (
    <div >
      <ReferenceContext.Provider value={{ HomeRef, ProductRef, AboutRef, ContactRef }}>
        {sidebarDispaly ? <Sidebar setSidebarDisplay={setSidebarDisplay} /> : null}
        <Header setSidebarDisplay={setSidebarDisplay} />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
          </Routes>
        </Suspense>

        <Footer />
      </ReferenceContext.Provider>
    </div>
  );
}

export default Layout;
