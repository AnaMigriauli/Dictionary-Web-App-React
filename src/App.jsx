import "./App.css";
import DictionaryApp from "./components/MainContainer";
import { FontContextProvider } from "./contexts/FontContext";

function App() {
  return (
    <FontContextProvider>
      <DictionaryApp />;
    </FontContextProvider>
  );
}

export default App;
