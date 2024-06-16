import { useState } from "react";
import styled from "styled-components";
import pluralize from "pluralize";
import { useNavigate } from "react-router-dom";

import { Button, Heading, Text, TrackRow } from ".";
import { ArrowFromSquare, ChevronDown, ChevronUp } from "../icons";
import releaseImage from "../assets/release.png";

import { IListRelease, ITrack } from "../types";
import { formatDate, formatSeconds } from "../utils";
import ROUTES from "../routes";

interface ListReleaseCardProps {
  release: IListRelease;
}

const ListReleaseCard = ({ release }: ListReleaseCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();
  const { _id, name, releaseDate, duration, numberOfTracks, photoUrl } =
    release;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setExpanded(!expanded);
  };

  return (
    <ListReleaseCardWrapper $expanded={expanded}>
      <Image
        src={photoUrl ? photoUrl : releaseImage}
        alt={name}
        $expanded={expanded}
      />
      <ReleaseDetailsWrapper $expanded={expanded}>
        <ReleaseCardDetails>
          <Heading size="h5">{name}</Heading>
          {numberOfTracks && (
            <Text>{`${numberOfTracks} ${pluralize(
              "song",
              numberOfTracks
            )}`}</Text>
          )}
          {duration && <Text>{formatSeconds(duration)}</Text>}
          {releaseDate && <Text>{formatDate(releaseDate)}</Text>}
        </ReleaseCardDetails>
        <ButtonsWrapper>
          <Button
            variant="primary"
            onClick={() => navigate(`${ROUTES.releases}/${_id}`)}
          >
            <ArrowFromSquare />
          </Button>
          <Button variant="primary" onClick={handleClick}>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </ButtonsWrapper>
      </ReleaseDetailsWrapper>
      <div></div>
      {expanded && (
        <PendingTracksWrapper $expanded={expanded}>
          {release.tracks.map((track: ITrack, index: number) => (
            <TrackRow
              track={track}
              key={track.number}
              border={index !== release.tracks.length - 1}
            />
          ))}
        </PendingTracksWrapper>
      )}
    </ListReleaseCardWrapper>
  );
};

const ListReleaseCardWrapper = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  border: ${({ theme, $expanded }) =>
    $expanded ? "none" : `1px solid ${theme.colors.lightGray}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const ReleaseDetailsWrapper = styled.div<{ $expanded: boolean }>`
  display: flex;
  align-items: flex-end;
  height: auto;
  background: ${({ theme }) => theme.colors.gray};
  border-top: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-right: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-right-radius: ${({ theme, $expanded }) =>
    $expanded ? "unset" : theme.borderRadius.small};

  button {
    margin: 0 ${({ theme }) => theme.margin.default}
      ${({ theme }) => theme.margin.default};
  }
`;

const Image = styled.img<{ $expanded: boolean }>`
  height: 100%;
  // TODO: make width dynamic
  width: 7rem;
  border-top: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-right: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-bottom: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ReleaseCardDetails = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.margin.default};
  flex-grow: 1;

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PendingTracksWrapper = styled.div<{ $expanded: boolean }>`
  padding: 0 ${({ theme }) => theme.margin.default};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid
    ${({ theme, $expanded }) => ($expanded ? theme.colors.lightGray : "none")};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

export default ListReleaseCard;
