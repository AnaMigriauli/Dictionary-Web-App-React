import { createContext, useState } from "react";

export const DictionaryContext = createContext();

const DictionaryContextProvider = ({ children }) => {
  const [word, setWord] = useState("keyboard");

  const value = { word, setWord };

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
};
export { DictionaryContextProvider };
