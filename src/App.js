import { useRef } from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Technology from "./Components/Technology/Technology";
import Truxt from "./Components/Truxt/Truxt";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  // const HeaderRef = useRef(null);
  // const TechnologyRef = useRef(null);
  // const ContactRef = useRef(null);
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Technology/>
      <Truxt/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
