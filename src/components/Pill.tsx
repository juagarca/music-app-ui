import styled from "styled-components";

interface ButtonLinkProps {
  label: string;
  variant: "primary" | "secondary";
}

const Pill = ({ label, variant }: ButtonLinkProps) => {
  return <PillWrapper $variant={variant}>{label}</PillWrapper>;
};

const PillWrapper = styled.div<{ $variant: string }>`
  width: fit-content;
  height: fit-content;
  padding: 0.25rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.white : theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.black};
  border: 1px solid
    ${({ theme, $variant }) =>
      $variant === "primary" ? theme.colors.white : theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.big};
`;

export default Pill;
