import React, { Suspense, lazy, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Hero = lazy(() => import("../../Components/Hero/Hero"));
const Technology = lazy(() => import("../../Components/Technology/Technology"));
const Truxt = lazy(() => import("../../Components/Truxt/Truxt"));
const Contact = lazy(() => import("../../Components/Contact/Contact"));

function Home() {
  const [sidebarDispaly, setSidebarDisplay] = useState(false);

  return (
    <>
      {sidebarDispaly ? <Sidebar setSidebarDisplay={setSidebarDisplay} /> : null}
      <Header setSidebarDisplay={setSidebarDisplay} />
      <Suspense fallback={<CircularProgress />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<CircularProgress />}>
        <Technology />
      </Suspense>

      <Suspense fallback={<CircularProgress />}>
        <Truxt />
      </Suspense>

      <Suspense fallback={<CircularProgress />}>
        <Contact />
      </Suspense>
      <Footer />
    </>
  );
}

export default Home;
