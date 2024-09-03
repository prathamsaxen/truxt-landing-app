import { useRef, useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Technology from "./Components/Technology/Technology";
import Truxt from "./Components/Truxt/Truxt";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReferenceContext from "./Context/ReferenceContext";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const HomeRef = useRef(null);
  const ProductRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const [sidebarDispaly, setSidebarDisplay] = useState(false);

  return (
    <div className="App">
      <ReferenceContext.Provider value={{ HomeRef, ProductRef, AboutRef, ContactRef }}>
        {sidebarDispaly ? <Sidebar setSidebarDisplay={setSidebarDisplay} /> : null}
        <Header setSidebarDisplay={setSidebarDisplay} />
        <Hero />
        <Technology />
        <Truxt />
        <Contact />
        <Footer />
      </ReferenceContext.Provider>
    </div>
  );
}

export default App;
