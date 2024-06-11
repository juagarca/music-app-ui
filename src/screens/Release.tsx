import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Heading, ReleaseImage, Text, TrackRow } from "../components";

import { IRelease, ITrack } from "../types";
import { formatDate } from "../utils";

import releasesDataJson from "../data/releases.json";

const Release = () => {
  const { releaseId } = useParams();
  const releasesData: IRelease[] = releasesDataJson as IRelease[];

  const release = releasesData.find(
    (release: IRelease) => release._id === releaseId
  );

  if (!releaseId || !release) return <div>Error!</div>;

  const { name, releaseDate, tracks } = release;

  return (
    <ReleaseWrapper>
      <ReleaseDetails>
        <ReleaseImage release={release} />
        <ReleaseInfo>
          <Heading size="h3">{name}</Heading>
          {releaseDate && <Text>Released on {formatDate(releaseDate)}</Text>}
        </ReleaseInfo>
      </ReleaseDetails>
      <ReleaseTracksDetails>
        <Heading size="h5">Songs</Heading>
        <ReleaseTracks>
          {tracks.map((track: ITrack) => (
            <TrackRow
              track={track}
              border={track.number !== tracks.length}
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
    margin-bottom: ${({ theme }) => theme.margin.default};
  }
`;

const ReleaseTracks = styled.div`
  padding: ${({ theme }) => theme.margin.default};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  max-height: 515px;
  overflow-y: auto;
`;

export default Release;
