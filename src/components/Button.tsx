import styled from "styled-components";

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
}

const Button = ({ label, children }: ButtonProps) => {
  return (
    <ButtonWrapper name="button" type="submit">
      {label || children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  color: ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: 50%;
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
