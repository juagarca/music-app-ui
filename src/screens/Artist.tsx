import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ArtistImage, Button, Heading, ReleaseCard, Text } from "../components";

import { fetchArtist, fetchReleases, updateFollowed } from "../api";
import { formatDate } from "../utils";
import { IRelease } from "../types";

import artistImage from "../assets/artist.png";

const Artist = () => {
  const { artistId } = useParams();
  const {
    data: artistData,
    isLoading: isLoadingArtist,
    error: isErrorArtist,
  } = useQuery({
    queryKey: ["artist"],
    queryFn: () => fetchArtist(artistId!),
  });
  const {
    data: releasesData,
    isLoading: isLoadingReleases,
    error: isErrorReleases,
  } = useQuery({
    queryKey: ["releases"],
    queryFn: () => fetchReleases(artistId!),
  });
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  useEffect(() => {
    artistData && setIsFollowed(artistData.followed);
  }, [artistData]);

  if (isLoadingArtist || isLoadingReleases) return <div>Loading...</div>;
  if (isErrorArtist || isErrorReleases || !artistData || !releasesData)
    return <div>Error!</div>;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();

    if (isFollowed) {
      updateFollowed(artistId!, false);
      setIsFollowed(false);
    } else {
      updateFollowed(artistId!, true);
      setIsFollowed(true);
    }
  };

  const { photoUrl, artistName, name, dateOfBirth, placeOfBirth, bio } =
    artistData;

  return (
    <ArtistWrapper>
      <ArtistImage photoUrl={photoUrl ? photoUrl : artistImage} />
      <ArtistInfo>
        <ArtistDetails>
          <HeadingWrapper>
            <Heading>{artistName}</Heading>
            <Button
              label={isFollowed ? "Unfollow" : "Follow"}
              variant={isFollowed ? "secondary" : "primary"}
              onClick={handleClick}
            />
          </HeadingWrapper>
          <Text>{name}</Text>
          {dateOfBirth && <Text>{formatDate(dateOfBirth)}</Text>}
          <Text>{placeOfBirth}</Text>
          <Text>{bio}</Text>
        </ArtistDetails>
        <Heading size="h5">Releases</Heading>
        <ArtistReleases>
          {releasesData.length ? (
            releasesData.map((release: IRelease) => (
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
  grid-gap: ${({ theme }) => theme.margin.default};
  flex-grow: 1;
  padding: ${({ theme }) => theme.margin.default};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.margin.default};
`;

const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.default};
  // TODO: Fix this
  max-height: 600px;
  overflow-y: auto;
`;

const ArtistDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.margin.default};
  height: fit-content;
  padding: ${({ theme }) => theme.margin.default};
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
  grid-gap: ${({ theme }) => theme.margin.default};
`;

export default Artist;
