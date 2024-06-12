import { useState } from "react";
import styled from "styled-components";

import { Button, FeaturingRow, Text } from ".";
import { Check, Cross } from "../icons";

import { ITrack } from "../types";
import { formatSeconds } from "../utils";

interface TrackCardProps {
  track: ITrack;
  border?: boolean;
}

const TrackRow = ({ track, border = true }: TrackCardProps) => {
  const [listened, setListened] = useState(false);
  const { name, number, duration, featuring } = track;

  return (
    <TrackRowWrapper $border={border}>
      <TrackRowDetails>
        <Text>
          {number} - {name} - {formatSeconds(duration)}
        </Text>
        {featuring && <FeaturingRow featuring={featuring} />}
      </TrackRowDetails>
      <Button
        variant={listened ? "secondary" : "primary"}
        onClick={(e) => {
          e.currentTarget.blur();
          setListened(true);
        }}
      >
        {listened ? <Cross /> : <Check />}
      </Button>
    </TrackRowWrapper>
  );
};

const TrackRowWrapper = styled.div<{ $border: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.margin.default} 0;
  border-bottom: ${({ theme, $border }) =>
    $border ? `1px solid ${theme.colors.lightGray}` : "none"};
`;

const TrackRowDetails = styled.div``;

export default TrackRow;
