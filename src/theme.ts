import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  defaultMargin: "1rem",

  borderRadius: {
    small: "8px",
    big: "50px",
    round: "50%",
  },

  colors: {
    black: "#181818",
    darkGray: "#272727",
    lightGray: "#565856",
    gray: "#22242B",
    white: "#F8F8F8",
  },

  fonts: {
    headings: "Nunito, Helvetica, Arial, sans-serif",
    text: "Quicksand, Helvetica, Arial, sans-serif",
  },

  fontSize: {
    h1: "3.5rem",
    h2: "3rem",
    h3: "2.5rem",
    h4: "2rem",
    h5: "1.5rem",
    h6: "1rem",
    body: "1rem",
    small: "0.8rem",
    extraSmall: "0.5rem",
  },

  screenBreakpoints: {
    tablet: "480px",
    laptop: "768px",
    desktops: "1024px",
  },
};

export default theme;
