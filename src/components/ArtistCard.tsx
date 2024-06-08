import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ROUTES from "../routes";
import { Artist } from "../types";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const navigate = useNavigate();

  return (
    <ArtistCardWrapper
      key={artist._id}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${artist.photoUrl}')`,
      }}
      onClick={() => navigate(`${ROUTES.artists}/${artist._id}`)}
    >
      <ArtistCardTitle>{artist.artistName}</ArtistCardTitle>
    </ArtistCardWrapper>
  );
};

const ArtistCardWrapper = styled.div`
  text-align: center;
  padding: 4rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
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

const ArtistCardTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.headings};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export default ArtistCard;
