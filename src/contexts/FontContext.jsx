import { createContext, useState, useEffect } from "react";

export const FontContext = createContext();
const initialFont = () => {
  const font = localStorage.getItem("font");
  return JSON.parse(font);
};
const FontContextProvider = ({ children }) => {
  const [font, setFont] = useState(initialFont);

  useEffect(() => {
    localStorage.setItem("font", JSON.stringify(font));
  }, [font]);

  const value = { font, setFont };

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export { FontContextProvider };
