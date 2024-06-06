import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      black: string;
      darkGray: string;
      darkGreen: string;
      green: string;
      lightGray: string;
      white: string;
    };

    screenBreakpoints: {
      tablet: string;
      laptop: string;
      desktops: string;
    };
  }
}
