import React from "react";
import styled from "styled-components";

interface HeadingProps {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = styled(({ size = "h1", ...props }: HeadingProps) =>
  React.createElement(size, props)
)`
  font-weight: 400;
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "h1":
        return theme.fontSize.h1;
      case "h2":
        return theme.fontSize.h2;
      case "h3":
        return theme.fontSize.h3;
      case "h4":
        return theme.fontSize.h4;
      case "h5":
        return theme.fontSize.h5;
      case "h6":
        return theme.fontSize.h6;
      default:
        return theme.fontSize.h1;
    }
  }}};
`;

export default Heading;
