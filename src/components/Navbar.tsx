import styled from "styled-components";
import { Link } from "react-router-dom";

import { Avatar } from "../components";

import ROUTES from "../routes";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>Music App</Logo>
      <Links>
        <Link to={ROUTES.artists}>Artists</Link>
        <Link to="">Your list</Link>
        <Link to="">
          <Avatar />
        </Link>
      </Links>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  padding: 1.2rem 0.5rem;
  background: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 12px rgba(210, 210, 210, 0.2);
  transition: all 0.3s ease;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }
`;

const Logo = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export default Navbar;
