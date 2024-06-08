import styled from "styled-components";

interface TextProps {
  variant?: "body" | "small";
  children: React.ReactNode;
}

const Text = ({ variant = "body", children }: TextProps) => {
  return <TextWrapper $variant={variant}>{children}</TextWrapper>;
};

const TextWrapper = styled.p<{ $variant: string }>`
  font-size: ${({ $variant, theme }) => {
    switch ($variant) {
      case "body":
        return theme.fontSize.body;
      case "small":
        return theme.fontSize.small;
      default:
        return theme.fontSize.body;
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;

export default Text;
