import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import pluralize from "pluralize";

import {
  Heading,
  ButtonLink,
  ReleaseImage,
  Text,
  TrackRow,
} from "../components";

import { ITrack } from "../types";
import { formatDate, formatSeconds } from "../utils";
import { fetchRelease, fetchTracks } from "../api";
import ROUTES from "../routes";

const Release = () => {
  const { releaseId } = useParams();
  const {
    data: releaseData,
    isLoading: releaseIsLoading,
    error: releaseError,
  } = useQuery({
    queryKey: ["release"],
    queryFn: () => fetchRelease(releaseId!),
  });
  const {
    data: tracksData,
    isLoading: tracksIsLoading,
    error: tracksError,
  } = useQuery({
    queryKey: ["tracks", releaseId],
    queryFn: () => fetchTracks(releaseId!),
  });

  if (releaseIsLoading || tracksIsLoading) return <div>Loading...</div>;
  if (!releaseId || !releaseData || !tracksData || releaseError || tracksError)
    return <div>Error!</div>;

  const { name, artistId, artistName, releaseDate, duration, numberOfTracks } =
    releaseData;

  return (
    <ReleaseWrapper>
      <ReleaseDetails>
        <ReleaseImage release={releaseData} />
        <ReleaseInfo>
          <Heading size="h5">{name}</Heading>
          <Text>
            By{" "}
            <ButtonLink
              to={`${ROUTES.artists}/${artistId}`}
              label={artistName}
              active
            />
          </Text>
          <Text>
            {`${numberOfTracks} ${pluralize(
              "song",
              numberOfTracks
            )} - ${formatSeconds(duration)}`}{" "}
          </Text>
          <Text>Release date: {formatDate(releaseDate)}</Text>
        </ReleaseInfo>
      </ReleaseDetails>
      <ReleaseTracksDetails>
        <Heading size="h5">Songs</Heading>
        <ReleaseTracks>
          {tracksData.map((track: ITrack) => (
            <TrackRow
              track={track}
              border={track.number !== numberOfTracks}
              key={track.number}
            />
          ))}
        </ReleaseTracks>
      </ReleaseTracksDetails>
    </ReleaseWrapper>
  );
};

const ReleaseWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({ theme }) => theme.margin.default};
  flex-grow: 1;
  padding: ${({ theme }) => theme.margin.default};
`;

const ReleaseDetails = styled.div`
  display: flex;
  flex-direction: column;

  * {
    margin-bottom: ${({ theme }) => theme.margin.small};
  }
`;

const ReleaseTracksDetails = styled.div`
  > :nth-child(1) {
    margin-bottom: ${({ theme }) => theme.margin.default};
  }
`;

const ReleaseInfo = styled.div`
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.margin.default};
  padding: ${({ theme }) => theme.margin.default};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  > :nth-child(2) {
    margin-bottom: ${({ theme }) => theme.margin.small};
  }
`;

const ReleaseTracks = styled.div`
  padding: 0 ${({ theme }) => theme.margin.default};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  max-height: 515px;
  overflow-y: auto;
`;

export default Release;
