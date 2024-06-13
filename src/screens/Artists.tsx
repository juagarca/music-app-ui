import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { SearchForm, SearchCard } from "../components";

import { fetchArtists } from "../api";
import { IArtist } from "../types";

import artistsDataJson from "../data/artists.json";

const artistsData: IArtist[] = artistsDataJson as IArtist[];

const Artists = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
    initialData: artistsData,
  });
  const [artists, setArtists] = useState<IArtist[]>(data);

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error!</div>;

  return (
    <ArtistsWrapper>
      <SearchForm setArtists={setArtists} />
      <ArtistsGrid>
        {artists.map((artist) => (
          <SearchCard artist={artist} key={artist._id} />
        ))}
      </ArtistsGrid>
    </ArtistsWrapper>
  );
};

const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.default};
  padding: ${({ theme }) => theme.margin.default};
`;

const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.margin.default};

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
