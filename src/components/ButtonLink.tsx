import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  label?: string;
  active?: boolean;
  children?: React.ReactNode;
}

const ButtonLink = ({
  to,
  label,
  active = false,
  children,
}: ButtonLinkProps) => {
  return (
    <LinkWrapper to={to} active={active}>
      {label || children}
    </LinkWrapper>
  );
};

const LinkWrapper = styled(Link)<{ active: boolean }>`
  text-decoration: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.lightGray};
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default ButtonLink;
