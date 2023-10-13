/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        disc: "disc",
      },
      width: {
        40: "40px",
        14: "14px",
        28.05: "28.05px",
        375: "375px",
        327: "327px",
        98: "98px",
      },
      height: {
        1: "1px",
        14: "14px",
        24: "24px",
        32: "32px",
        1065: "1065px",
        48: "48px",
        64: "64px",
      },
      colors: {
        "custom-gray": "#757575",
        "light-gray": "#E9E9E9",
        "light-gray-01": "#F4F4F4",
        purple: "#8F19E8",
        " black": "#2D2D2D",
        "dark-mode": "#050505",
        "light-black": "#1F1F1F",
        "black-01": "#3A3A3A",
        red: "#FF5252",
      },
      spacing: {
        85: "85px",
        3: "3px",
        9: "9px",
        16: "16px",
        16.45: "16.45px",
        11: "11px",
        24: "24px",
        24.45: "24.45px",
      },
      borderRadius: {
        28: "28px",
      },
      gap: {
        12: "12px",
      },
    },
  },
  plugins: [],
};
