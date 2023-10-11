import { useState, useEffect } from "react";
import bookIcon from "../assets/images/iconoir_book.svg";
import useFontContext from "../hooks/useFontContext";
import Select from "react-select";
const options = [
  { value: "serif", label: "serif" },
  { value: "roboto", label: "roboto" },
  { value: "mono", label: "mono" },
];

const Header = () => {
  const { font, setFont } = useFontContext();
  const [theme, setTheme] = useState("light");

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "transparent"
        : state.isFocused
        ? "transparent"
        : null,
      color: state.isFocused ? "#A445ED" : theme === "dark" ? "white" : "black",
      cursor: "pointer",
      borderRadius: "16px",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      borderWidth: 0,
      width: "auto",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#A445ED",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "black" : "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "white" : "black",
    }),
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeChangeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between w-full mb-6">
      <img src={bookIcon} alt="book icon" className="h-32 w-28.05" />
      <div className="flex items-center">
        <Select
          value={options.find((option) => option.value === font)}
          isSearchable={false}
          onChange={(e) => {
            setFont(e.value);
          }}
          options={options}
          styles={customStyles}
        />
        <div className="border-l border-light-gray h-32 mx-16 "></div>
        <div className="flex gap-12 ">
          <div className="w-40 h-5 bg-gray-400 flex items-center rounded-full relative overflow-hidden dark:bg-purple">
            <button
              onClick={themeChangeHandler}
              className={`w-14 h-14 bg-white rounded-full ml-3 mr-3 cursor-pointer absolute  transition-transform duration-500 ease-in-out ${
                theme === "light" ? "translate-x-0" : "translate-x-5"
              }`}
            />
          </div>

          <div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
                stroke="#757575"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
