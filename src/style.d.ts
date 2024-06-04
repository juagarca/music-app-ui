import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      white: string;
      text: string;
      background: string;
    };
  }
}
