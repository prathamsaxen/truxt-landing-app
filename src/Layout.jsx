import { useRef, useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Docs from "./Pages/Docs/Docs";
import Footer from "./Components/Footer/Footer";
import ReferenceContext from "./Context/ReferenceContext";
import Sidebar from "./Components/Sidebar/Sidebar";
// import chat_icon from "./assets/chat_bot_icon.svg";
// import AI from "./Components/AI/AI";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function Layout() {
  const HomeRef = useRef(null);
  const ProductRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const [sidebarDispaly, setSidebarDisplay] = useState(false);
  const [AIContainer, setAIContainer] = useState(false);
  return (
    <div className="App">
      {/* <button className="ai-button">
        <img src={chat_icon} alt="Error in loading icon" onClick={() => setAIContainer(true)} />
      </button> */}
      {/* {AIContainer ? <AI setAIContainer={setAIContainer} /> : null} */}
      <ReferenceContext.Provider value={{ HomeRef, ProductRef, AboutRef, ContactRef }}>
        {sidebarDispaly ? <Sidebar setSidebarDisplay={setSidebarDisplay} /> : null}
        <Header setSidebarDisplay={setSidebarDisplay} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
        <Footer />
      </ReferenceContext.Provider>
    </div>
  );
}

export default Layout;
