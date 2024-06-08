import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Avatar, ButtonLink } from "../components";

import ROUTES from "../routes";

const Navbar = () => {
  const location = useLocation();

  return (
    <NavbarWrapper>
      <Logo>Music App</Logo>
      <Links>
        <ButtonLink
          to={ROUTES.artists}
          label="Artists"
          active={location.pathname === ROUTES.artists}
        />
        <ButtonLink to={ROUTES.artists} label="Your list" />
        <ButtonLink to={ROUTES.artists}>
          <Avatar />
        </ButtonLink>
      </Links>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.defaultMargin};
  background: ${({ theme }) => theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const Logo = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.headings};
  color: ${({ theme }) => theme.colors.white};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.defaultMargin};
`;

export default Navbar;
