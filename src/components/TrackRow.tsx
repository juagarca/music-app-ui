import { useState } from "react";
import styled from "styled-components";

import { Button, FeaturingRow, Text } from ".";
import { Check, Cross } from "../icons";

import { ITrack } from "../types";
import { formatSeconds } from "../utils";
import { updateTrackListened } from "../api";

interface TrackCardProps {
  releaseId: string;
  track: ITrack;
  minimal?: boolean;
  border?: boolean;
}

const TrackRow = ({
  releaseId,
  track,
  minimal = false,
  border = true,
}: TrackCardProps) => {
  const { _id, name, number, duration, featuring, listened } = track;
  const [isListened, setIsListened] = useState(listened);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();

    try {
      await updateTrackListened(releaseId, _id, !isListened);
      setIsListened(!isListened);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <TrackRowWrapper $border={border}>
      <TrackRowDetails>
        <Text>
          {number} - {name}
          {!minimal && ` - ${formatSeconds(duration)}`}
        </Text>
        {featuring && <FeaturingRow featuring={featuring} />}
      </TrackRowDetails>
      <Button
        variant={isListened ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isListened ? <Cross /> : <Check />}
      </Button>
    </TrackRowWrapper>
  );
};

const TrackRowWrapper = styled.div<{ $border: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: ${({ theme }) => theme.margin.default} 0;
  border-bottom: ${({ theme, $border }) =>
    $border ? `1px solid ${theme.colors.lightGray}` : "none"};
`;

const TrackRowDetails = styled.div``;

export default TrackRow;
