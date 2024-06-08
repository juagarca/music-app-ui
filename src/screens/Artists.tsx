import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { SearchForm, ArtistCard } from "../components";

import { fetchArtists } from "../api";
import { Artist } from "../types";
import artistsData from "../data/artists.json";

const Artists = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
    initialData: artistsData,
  });
  const [artists, setArtists] = useState<Artist[]>(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ArtistsWrapper>
      <SearchForm setArtists={setArtists} />
      <ArtistsGrid>
        {artists.map((artist) => (
          <ArtistCard artist={artist} key={artist._id} />
        ))}
      </ArtistsGrid>
    </ArtistsWrapper>
  );
};

const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.defaultMargin};
  padding: ${({ theme }) => theme.defaultMargin};
`;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.defaultMargin};

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

export default Artists;
