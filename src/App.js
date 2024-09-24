import "./App.css";
import Layout from "./Layout";
import TruxtModal from "@truxt-ai/client-modal";

function App() {
  return (
    <div className="App">
      <Layout />
      <TruxtModal ButtonText={"ASK AI"} API={"k"}/>
    </div>
  );
}

export default App;
