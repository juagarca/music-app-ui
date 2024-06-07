import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  borderRadius: "50px",
  defaultMargin: "1rem",
  textSize: "1.2rem",

  fonts: {
    headings: "Helvetica, Arial, sans-serif",
    text: "Helvetica, Arial, sans-serif",
  },

  colors: {
    black: "#181818",
    darkGray: "#272727",
    lightGray: "#565856",
    mediumGray: "#22242A",
    white: "#F8F8F8",
  },

  screenBreakpoints: {
    tablet: "480px",
    laptop: "768px",
    desktops: "1024px",
  },
};

export default theme;
