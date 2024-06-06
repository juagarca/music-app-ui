import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { SearchForm } from "../components";
import { fetchArtists } from "../api";

import ROUTES from "../routes";
import image from "../assets/image.png";

const Artists = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ArtistsWrapper>
      <SearchForm />
      <ArtistsGrid>
        {data?.map((artist) => (
          <ArtistCard
            key={artist._id}
            onClick={() => navigate(`${ROUTES.artists}/${artist._id}`)}
          >
            <ArtistCardTitle>{artist.artistName}</ArtistCardTitle>
          </ArtistCard>
        ))}
      </ArtistsGrid>
    </ArtistsWrapper>
  );
};

const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.2rem;
`;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.2rem;

  @media (min-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.screenBreakpoints.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.screenBreakpoints.desktops}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ArtistCard = styled.div`
  text-align: center;
  padding: 6rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${image});
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0 0 45px rgba(210, 210, 210, 0.1);
  transition: background-image 0.3s ease;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${image});
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  a {
    text-decoration: none;
  }

  @media (min-width: ${({ theme }) => theme.screenBreakpoints.tablet}) {
    padding: 5rem 0;
  }
`;

const ArtistCardTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export default Artists;
