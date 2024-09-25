import React, { Suspense, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Hero = lazy(() => import("../../Components/Hero/Hero"));
const Technology = lazy(() => import("../../Components/Technology/Technology"));
const Truxt = lazy(() => import("../../Components/Truxt/Truxt"));
const Contact = lazy(() => import("../../Components/Contact/Contact"));

function Home() {
  return (
    <>
      <Suspense fallback={<CircularProgress/>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<CircularProgress/>}>
        <Technology />
      </Suspense>

      <Suspense fallback={<CircularProgress/>}>
        <Truxt />
      </Suspense>

      <Suspense fallback={<CircularProgress/>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
