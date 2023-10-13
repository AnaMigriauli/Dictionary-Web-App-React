import Header from "./Header";
import SearchInput from "./SearchInput";
import WordDefinition from "./WordDefinition";
import { DictionaryContextProvider } from "../contexts/DictionaryContext";
import useFontContext from "../hooks/useFontContext";

const DictionaryApp = () => {
  const { font } = useFontContext();

  return (
    <DictionaryContextProvider>
      <div
        className="w-full   bg-white p-6 pb-85 dark:bg-dark-mode  "
        style={{ fontFamily: font }}
      >
        <Header />
        <SearchInput />
        <WordDefinition />
      </div>
    </DictionaryContextProvider>
  );
};
export default DictionaryApp;
