import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defaultMargin: string;

    borderRadius: {
      small: string;
      big: string;
      round: string;
    };

    colors: {
      black: string;
      darkGray: string;
      lightGray: string;
      gray: string;
      white: string;
    };

    fonts: {
      headings: string;
      text: string;
    };

    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body: string;
      small: string;
    };

    screenBreakpoints: {
      tablet: string;
      laptop: string;
      desktops: string;
    };
  }
}
