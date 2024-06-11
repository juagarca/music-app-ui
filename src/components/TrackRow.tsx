import { useState } from "react";
import styled from "styled-components";

import { Button, Text } from ".";
import { Check, Cross } from "../icons";

import { ITrack } from "../types";
import { formatSeconds } from "../utils";

interface TrackCardProps {
  track: ITrack;
  border?: boolean;
}

const TrackRow = ({ track, border = true }: TrackCardProps) => {
  const [listened, setListened] = useState(false);
  const { name, number, duration } = track;

  return (
    <TrackRowWrapper $border={border}>
      <Text>
        {number} - {name} - {formatSeconds(duration)}
      </Text>
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
  padding: ${({ theme, $border }) =>
    `${theme.margin.small} 0 ${$border ? theme.margin.small : 0} 0`};
  border-bottom: ${({ theme, $border }) =>
    $border ? `1px solid ${theme.colors.lightGray}` : "none"};
`;

export default TrackRow;
