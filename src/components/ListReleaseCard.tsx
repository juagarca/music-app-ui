import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, ButtonLink, Heading, Text, TrackRow } from ".";
import { ArrowFromSquare, ChevronDown, ChevronUp } from "../icons";
import releaseImage from "../assets/release.png";

import { IRelease, ITrack } from "../types";
import { formatDate } from "../utils";
import ROUTES from "../routes";

interface ListReleaseCardProps {
  release: IRelease;
}

const ListReleaseCard = ({ release }: ListReleaseCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const navigate = useNavigate();
  const { _id, name, artistId, artistName, releaseDate, photoUrl, tracks } =
    release;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    setExpanded(!expanded);
  };

  return (
    <ListReleaseCardWrapper $expanded={expanded}>
      <ReleaseCardWrapper $expanded={expanded}>
        <CardImage
          src={photoUrl ? photoUrl : releaseImage}
          alt={name}
          $expanded={expanded}
        />
        <CardDetailsWrapper>
          <Heading size="h5">{name}</Heading>
          <Text>
            By{" "}
            <ButtonLink
              to={`${ROUTES.artists}/${artistId}`}
              label={artistName}
              active
            />
          </Text>
          {releaseDate && <Text>{formatDate(releaseDate)}</Text>}
        </CardDetailsWrapper>
        <CardButtonsWrapper>
          <Button
            variant="primary"
            onClick={() => navigate(`${ROUTES.releases}/${_id}`)}
          >
            <ArrowFromSquare />
          </Button>
          <Button variant="primary" onClick={handleClick}>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </CardButtonsWrapper>
      </ReleaseCardWrapper>
      {expanded && (
        <PendingTracksWrapper $expanded={expanded}>
          {tracks?.map((track: ITrack, index: number) => (
            <TrackRow
              releaseId={_id}
              track={track}
              key={track.number}
              border={index !== tracks.length - 1}
              minimal
            />
          ))}
        </PendingTracksWrapper>
      )}
    </ListReleaseCardWrapper>
  );
};

const ListReleaseCardWrapper = styled.div<{ $expanded: boolean }>`
  // display: grid;
  // grid-template-columns: auto 1fr;
`;

const ReleaseCardWrapper = styled.div<{ $expanded: boolean }>`
  display: flex;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const CardImage = styled.img<{ $expanded: boolean }>`
  height: 100%;
  // TODO: make width dynamic
  width: 7rem;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

const CardDetailsWrapper = styled.div`
  flex-grow: 1;
  text-align: left;
  height: 100%;
  margin: auto 0;
  padding: ${({ theme }) => theme.margin.default};

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  > :nth-child(2) {
    margin-bottom: ${({ theme }) => theme.margin.extraSmall};
  }
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.margin.default};
`;

const PendingTracksWrapper = styled.div<{ $expanded: boolean }>`
  padding: 0 ${({ theme }) => theme.margin.default};
`;

export default ListReleaseCard;
