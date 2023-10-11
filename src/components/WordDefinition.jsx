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
      <div className="flex justify-between items-center   mb-7">
        <div>
          <h1 className="font-bold text-4xl mb-2 dark:text-white">
            {dataArr?.word}
          </h1>
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
        <div className="flex items-center mb-8 ">
          <p className="mr-4 text-black italic font-semibold leading-normal text-lg dark:text-white">
            {dataArr?.meanings[0].partOfSpeech}
          </p>
          <div className="h-1 w-full bg-light-gray dark:bg-black-01"></div>
        </div>
        <h2 className="text-custom-gray text-base font-light mb-4">Meaning</h2>
        <ul className="list-disc pl-4  marker:text-purple">
          {dataArr?.meanings[0]?.definitions.map((el, i) => (
            <li className="mb-4 dark:text-white" key={i}>
              {el.definition}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 mb-8">
          {dataArr?.meanings[0]?.synonyms.length > 0 && (
            <h3 className="text-custom-gray text-base mr-6 font-light ">
              Synonyms
            </h3>
          )}
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
      <div className="mb-8">
        <div className="flex items-center mb-8">
          <p className="mr-4 text-black italic font-semibold leading-normal text-lg dark:text-white">
            {dataArr?.meanings[1]?.partOfSpeech}
          </p>
          {dataArr?.meanings[1]?.partOfSpeech && (
            <div className="h-1 w-full bg-light-gray  dark:bg-black-01"></div>
          )}
        </div>
        {dataArr?.meanings[1]?.definitions && (
          <h2 className="text-custom-gray text-base font-light mb-4">
            Meaning
          </h2>
        )}
        <ul className="list-disc pl-4  marker:text-purple">
          {dataArr?.meanings[1]?.definitions.map((el, i) => (
            <li className="mb-4 dark:text-white" key={i}>
              {el.definition}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-1 w-full bg-light-gray mb-6  dark:bg-black-01"></div>
      <Source URL={dataArr?.sourceUrls} />
    </div>
  );
};
export default WordDefinition;
