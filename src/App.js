import "./App.css";
import Layout from "./Layout";
import TruxtModal from "@prathamsaxena/ai-modal-container";

function App() {
  const ConfigurationAIClient = {
    API: process.env.REACT_APP_LLM_API,
    ButtonText: "ASK AI",
    Disclaimer: `This is a custom LLM for answering questions about Docker.Answers are based on the
                  contents of the documentation. This feature is experimental - rate the answers to
                  let us know what you think!`,
  };
  return (
    <div className="App">
      <Layout />
      <TruxtModal Options={ConfigurationAIClient} ButtonText={"Ask"}/>
    </div>
  );
}

export default App;
