/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        40: "40px",
        14: "14px",
        28.05: "28.05px",
        375: "375px",
        327: "327px",
      },
      height: {
        20: "20px",
        14: "14px",
        32: "32px",
        1065: "1065px",
        48: "48px",
      },
      colors: {
        "custom-gray": "#757575",
        "light-gray": "#E9E9E9",
        "light-gray-01": "#F4F4F4",
      },
      spacing: {
        85: "85px",
        3: "3px",
        16: "16px",
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
