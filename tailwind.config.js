/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      "winter",
      "dark",
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#40bff8",
          secondary: "#828df8",
          color: "#b3c5ef",
          "primary-focus": "#b3c5ef",
        },
      }

    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "winter",
  },


}

// before changing themes 
// themes: [
//   {
//     light: {
//       ...require("daisyui/src/colors/themes")["[data-theme=light]"],
//       primary: "#3bacff",
//       "primary-focus": "mediumblue",
//     },
//   },
// ],