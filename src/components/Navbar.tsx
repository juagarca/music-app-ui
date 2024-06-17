import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { Avatar, ButtonLink, Heading } from "../components";

import ROUTES from "../routes";

const Navbar = () => {
  const location = useLocation();
  const { artists, list } = ROUTES;

  return (
    <NavbarWrapper>
      <Logo size="h6">Music App</Logo>
      <Links>
        <ButtonLink
          to={list}
          label="List"
          active={location.pathname === list}
        />
        <ButtonLink
          to={artists}
          label="Artists"
          active={location.pathname === artists}
        />
        <ButtonLink to={artists}>
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
  padding: ${({ theme }) => theme.margin.default};
  background: ${({ theme }) => theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const Logo = styled(Heading)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.margin.default};
`;

export default Navbar;
