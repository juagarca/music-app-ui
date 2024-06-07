import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    defaultMargin: string;
    textSize: string;

    fonts: {
      headings: string;
      text: string;
    };

    colors: {
      black: string;
      darkGray: string;
      lightGray: string;
      mediumGray: string;
      white: string;
    };

    screenBreakpoints: {
      tablet: string;
      laptop: string;
      desktops: string;
    };
  }
}
