import Header from "./Header";
import SearchInput from "./SearchInput";
import WordDefinition from "./WordDefinition";
import { DictionaryContextProvider } from "../contexts/DictionaryContext";
import Loader from "./Loader";
const DictionaryApp = () => {
  return (
    <DictionaryContextProvider>
      <div className="w-375   bg-white p-6 pb-85 dark:bg-dark-mode">
        <Header />
        <SearchInput />
        <WordDefinition />
      </div>
    </DictionaryContextProvider>
  );
};
export default DictionaryApp;
