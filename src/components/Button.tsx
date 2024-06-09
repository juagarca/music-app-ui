import styled from "styled-components";

interface ButtonProps {
  label?: string;
  variant: "primary" | "secondary";
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, variant, children, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper
      name="button"
      type="submit"
      $variant={variant}
      onClick={onClick}
    >
      {label || children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ $variant: string }>`
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 0.8rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.black};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary" ? theme.colors.white : theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.big};
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;

export default Button;
