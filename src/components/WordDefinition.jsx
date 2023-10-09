import { useState, useEffect } from "react";
import useDictionaryContext from "../hooks/useDictionaryContext";
import audio from "../assets/images/player.svg";
import Source from "./Source";
//API
const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const WordDefinition = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const { word } = useDictionaryContext();

  console.log(word);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}${word}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(true);
      }
    }

    if (word) {
      fetchData();
    }
  }, [word]);

  const dataArr = data && data[0];

  const audioURL = dataArr?.phonetics[0].audio;

  const playAudio = () => {
    audio && new Audio(audioURL).play();
  };

  console.log(dataArr?.meanings[1]);
  return (
    <div>
      <div>
        <div>
          <h1>{dataArr?.word}</h1>
          <p className="text-purple">{dataArr?.phonetic}</p>
        </div>
        <div>
          {audioURL && (
            <img
              className="cursor-pointer"
              src={audio}
              alt="audio player"
              onClick={playAudio}
            />
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <p className="mr-4">{dataArr?.meanings[0].partOfSpeech}</p>
          <div className="h-1 w-full bg-light-gray"></div>
        </div>
        <h2 className="text-custom-gray text-base">Meaning</h2>
        <ul className="list-disc pl-4  marker:text-purple">
          {dataArr?.meanings[0]?.definitions.map((el, i) => (
            <li key={i}>{el.definition}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <h3 className="text-custom-gray text-base mr-6">Synonyms</h3>
          {dataArr?.meanings[0]?.synonyms.map((el, i) => (
            <span
              className=" text-white bg-purple p-[2px] px-[5px] rounded-full"
              key={i}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <p className="mr-4">{dataArr?.meanings[1]?.partOfSpeech}</p>
          <div className="h-1 w-full bg-light-gray"></div>
        </div>
        <h2 className="text-custom-gray text-base">Meaning</h2>
        <ul className="list-disc pl-4  marker:text-purple">
          {dataArr?.meanings[1]?.definitions.map((el, i) => (
            <li key={i}>{el.definition}</li>
          ))}
        </ul>
      </div>
      <div className="h-1 w-full bg-light-gray"></div>
      <Source URL={dataArr?.sourceUrls} />
    </div>
  );
};
export default WordDefinition;
