import { useState, useEffect } from "react";
import useDictionaryContext from "../hooks/useDictionaryContext";
import audio from "../assets/images/player.svg";
import Source from "./Source";
import Error from "./Error";
import Loader from "./Loader";
//API
const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const WordDefinition = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hover, setHover] = useState(false);
  const { word } = useDictionaryContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}${word}`);
        const result = await response.json();
        if (result.title === "No Definitions Found") {
          setError(true);
          setData([]);
        } else {
          setData(result);
          setError(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    word && fetchData();
  }, [word]);

  const playAudio = () => {
    audio && new Audio(audioURL).play();
  };
  if (isLoading) return <Loader />;
  if (error || !data[0]) return <Error />;

  const dataArr = data && data[0];
  const audioURL = dataArr?.phonetics[0].audio;

  return (
    <div>
      <div className="flex justify-between items-center   mb-7 md:mb-10 ">
        <div>
          <h1 className="font-bold text-4xl mb-2 dark:text-white md:text-6xl md:mb-11">
            {dataArr?.word}
          </h1>
          <p className="text-purple md:text-2xl">{dataArr?.phonetic}</p>
        </div>
        <div>
          {audioURL && (
            <button
              className="cursor-pointer"
              src={audio}
              alt="audio player"
              onClick={playAudio}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  fill={!hover ? "#a445ed75" : "#A445ED"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29 27V48L50 37.5L29 27Z"
                  fill={!hover ? "#A445ED" : "white"}
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center mb-8  md:mb-10  ">
          <p className="mr-4 text-black italic font-semibold leading-normal text-lg dark:text-white md:text-2xl">
            {dataArr?.meanings[0].partOfSpeech}
          </p>
          <div className="h-1 w-full bg-light-gray dark:bg-black-01"></div>
        </div>
        <h2 className="text-custom-gray text-base font-light mb-4 md:text-xl">
          Meaning
        </h2>
        <ul className="list-disc pl-4  marker:text-purple md:mb-7">
          {dataArr?.meanings[0]?.definitions.map((el, i) => (
            <li className="mb-4 dark:text-white md:text-lg" key={i}>
              {el.definition}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 mb-8 md:gap-1 md:mb-10">
          {dataArr?.meanings[0]?.synonyms.length > 0 && (
            <h3 className="text-custom-gray text-base mr-6 font-light md:text-xl ">
              Synonyms
            </h3>
          )}
          {dataArr?.meanings[0]?.synonyms.map((el, i) => (
            <span
              className=" text-white bg-purple p-[2px] px-[5px] rounded-full md:text-xl"
              key={i}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-8 md:mb-10">
        <div className="flex items-center mb-8">
          <p className="mr-4 text-black italic font-semibold leading-normal text-lg dark:text-white md:text-2xl">
            {dataArr?.meanings[1]?.partOfSpeech}
          </p>
          {dataArr?.meanings[1]?.partOfSpeech && (
            <div className="h-1 w-full bg-light-gray  dark:bg-black-01"></div>
          )}
        </div>
        {dataArr?.meanings[1]?.definitions && (
          <h2 className="text-custom-gray text-base font-light mb-4 md:text-xl">
            Meaning
          </h2>
        )}
        <ul className="list-disc pl-4  marker:text-purple">
          {dataArr?.meanings[1]?.definitions.map((el, i) => (
            <li className="mb-4 dark:text-white md:text-lg" key={i}>
              {el.definition}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-1 w-full bg-light-gray mb-6  dark:bg-black-01 md:mb-6"></div>
      <Source URL={dataArr?.sourceUrls} />
    </div>
  );
};
export default WordDefinition;
