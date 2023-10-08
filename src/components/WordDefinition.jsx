import { useState, useEffect } from "react";
import useDictionaryContext from "../hooks/useDictionaryContext";

//API
const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const WordDefinition = () => {
  const [data, setData] = useState([]);
  const { word } = useDictionaryContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}${word}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        // console.error("ana");
      }
    }
    if (word) {
      fetchData();
    }
  }, [word]);
  return <div></div>;
};
export default WordDefinition;
