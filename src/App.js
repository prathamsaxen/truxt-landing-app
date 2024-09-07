import { useRef, useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Technology from "./Components/Technology/Technology";
import Truxt from "./Components/Truxt/Truxt";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReferenceContext from "./Context/ReferenceContext";
import Sidebar from "./Components/Sidebar/Sidebar";
import chat_icon from "./assets/chat_bot_icon.svg";
import AI from "./Components/AI/AI";
import "./App.css";

function App() {
  const HomeRef = useRef(null);
  const ProductRef = useRef(null);
  const AboutRef = useRef(null);
  const ContactRef = useRef(null);
  const [sidebarDispaly, setSidebarDisplay] = useState(false);
  const [AIContainer, setAIContainer] = useState(false);

  return (
    <div className="App">
      <button className="ai-button">
        <img src={chat_icon} alt="Error in loading icon" onClick={() => setAIContainer(true)} />
      </button>
      {AIContainer ? <AI setAIContainer={setAIContainer} /> : null}
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
