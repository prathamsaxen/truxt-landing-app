import CircularProgress from "@mui/material/CircularProgress";
import { useRef, Suspense, lazy } from "react";
import ReferenceContext from "./Context/ReferenceContext";
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
  return (
    <div>
      <ReferenceContext.Provider value={{ HomeRef, ProductRef, AboutRef, ContactRef }}>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/*" element={<Docs />} />
          </Routes>
        </Suspense>
      </ReferenceContext.Provider>
    </div>
  );
}

export default Layout;
