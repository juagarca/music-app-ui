import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  label?: string;
  children?: React.ReactNode;
  active?: boolean;
}

const ButtonLink = ({
  to,
  label,
  children,
  active = false,
}: ButtonLinkProps) => {
  return (
    <LinkWrapper to={to} $active={active}>
      {label || children}
    </LinkWrapper>
  );
};

const LinkWrapper = styled(Link)<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.body};
  font-weight: 300;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.lightGray};
  transition: all 0.25s ease;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default ButtonLink;
