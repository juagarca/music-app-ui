import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { fetchArtists } from "../api";
import { Artist } from "../types";
import ROUTES from "../routes";

const Artists = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <Container>
      <h1>Artists</h1>
      <ArtistsGrid>
        {data?.map((artist: Artist) => (
          <ArtistCard
            key={artist._id}
            onClick={() => navigate(`${ROUTES.artists}/${artist._id}`)}
          >
            <Heading>{artist.artistName}</Heading>
          </ArtistCard>
        ))}
      </ArtistsGrid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const ArtistCard = styled.div`
  text-align: center;
  padding: 6rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
`;

export default Artists;
