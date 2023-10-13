import Header from "./Header";
import SearchInput from "./SearchInput";
import WordDefinition from "./WordDefinition";
import { DictionaryContextProvider } from "../contexts/DictionaryContext";
import useFontContext from "../hooks/useFontContext";

const DictionaryApp = () => {
  const { font } = useFontContext();

  console.log(window.innerWidth);
  return (
    <DictionaryContextProvider>
      <div
        className="w-full   bg-white p-6 pb-85 dark:bg-dark-mode md:p-10 md:pb-28 xl:pl-5  xl:pr-5"
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
