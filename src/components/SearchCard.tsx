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
  const { _id, artistName } = artist;

  return (
    <SearchCardWrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${artist.photoUrl}')`,
      }}
      onClick={() => navigate(`${ROUTES.artists}/${_id}`)}
    >
      <SearchCardTitle size="h2">{artistName}</SearchCardTitle>
    </SearchCardWrapper>
  );
};

const SearchCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
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
`;

const SearchCardTitle = styled(Heading)`
  flex: 0 0 18rem;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export default SearchCard;
