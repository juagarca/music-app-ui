import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ArtistCard, Button, Heading, ReleaseCard, Text } from "../components";

import { fetchArtist } from "../api";
import { Artist, Release } from "../types";

import artistsDataJson from "../data/artists.json";
import releasesDataJson from "../data/releases.json";

const ArtistShow = () => {
  const [followed, setFollowed] = useState(false);
  const { artistId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["artist"],
    queryFn: () => fetchArtist(artistId!),
  });
  const artistsData: Artist[] = artistsDataJson as Artist[];
  const releasesData: Release[] = releasesDataJson as Release[];

  const artist = artistsData.find((artist: Artist) => artist._id === artistId);

  if (!artistId || !artist) return <div>Error!</div>;

  const releases = releasesData.filter((release: Release) =>
    release.tracks.some((track) => track.artistIds.includes(artist._id))
  );

  // if (isLoading) return <div>Loading...</div>;
  // if (error || !artistId) return <div>Error!</div>;

  return (
    <ArtistWrapper>
      <ArtistCard artist={artist} />
      <ArtistInfo>
        <ArtistDetails>
          <HeadingWrapper>
            <Heading>{artist.artistName}</Heading>
            <Button
              label={followed ? "Following" : "Follow"}
              variant={followed ? "secondary" : "primary"}
              onClick={(e) => {
                e.currentTarget.blur();
                setFollowed(e.currentTarget.innerText === "Follow");
              }}
            />
          </HeadingWrapper>
          <Text>{artist.name}</Text>
          <Text>{artist.dateOfBirth?.toString()}</Text>
          <Text>{artist.placeOfBirth}</Text>
          <Text>{artist.bio}</Text>
        </ArtistDetails>
        <Heading size="h5">Releases</Heading>
        <ArtistReleases>
          {releases.length ? (
            releases.map((release: Release) => (
              <ReleaseCard release={release} key={release._id} />
            ))
          ) : (
            <Text>No releases found</Text>
          )}
        </ArtistReleases>
      </ArtistInfo>
    </ArtistWrapper>
  );
};

const ArtistWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: ${({ theme }) => theme.defaultMargin};
  flex-grow: 1;
  padding: ${({ theme }) => theme.defaultMargin};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.defaultMargin};
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.defaultMargin};
  // TODO: Fix this
  max-height: 600px;
  overflow-y: auto;
`;

const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.defaultMargin};
  height: fit-content;
  padding: ${({ theme }) => theme.defaultMargin};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;

const ArtistReleases = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.defaultMargin};
`;

export default ArtistShow;
