import Header from "./Header";
import SearchInput from "./SearchInput";
import WordDefinition from "./WordDefinition";
import { DictionaryContextProvider } from "../contexts/DictionaryContext";
const DictionaryApp = () => {
  return (
    <DictionaryContextProvider>
      <div className="w-375 h-1065  bg-white p-6 pb-85">
        <Header />
        <SearchInput />
        <WordDefinition />
      </div>
    </DictionaryContextProvider>
  );
};
export default DictionaryApp;
