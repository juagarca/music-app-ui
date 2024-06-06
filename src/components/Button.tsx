import styled from "styled-components";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <ButtonWrapper name="button" type="submit">
      {label}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 11px 24px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

export default Button;
