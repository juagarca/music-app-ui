import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Heading } from "../components";

import ROUTES from "../routes";
import { Artist } from "../types";

interface SearchCardProps {
  artist: Artist;
}

const SearchCard = ({ artist }: SearchCardProps) => {
  const navigate = useNavigate();

  return (
    <SearchCardWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${artist.photoUrl}')`,
      }}
      onClick={() => navigate(`${ROUTES.artists}/${artist._id}`)}
    >
      <SearchCardTitle size="h2">{artist.artistName}</SearchCardTitle>
    </SearchCardWrapper>
  );
};

const SearchCardWrapper = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  @media (min-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
    padding: 8rem 0;
  }
`;

const SearchCardTitle = styled(Heading)`
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export default SearchCard;
