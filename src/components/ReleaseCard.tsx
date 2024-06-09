import styled from "styled-components";
import pluralize from "pluralize";

import { Heading, Text } from "../components";

import { Release } from "../types";
import { formatDate, formatSeconds } from "../utils";

interface ReleaseCardProps {
  release: Release;
}

const ReleaseCard = ({ release }: ReleaseCardProps) => {
  const { name, releaseDate, duration, photoUrl, tracks } = release;

  return (
    <ReleaseCardWrapper>
      <Image src={photoUrl} alt={name} />
      <ReleaseCardDetails>
        <Heading size="h6">{name}</Heading>
        <Text>{`${tracks.length} ${pluralize("song", tracks.length)}`}</Text>
        <Text>{formatSeconds(duration)}</Text>
        <Text>{formatDate(releaseDate)}</Text>
      </ReleaseCardDetails>
    </ReleaseCardWrapper>
  );
};

const ReleaseCardWrapper = styled.div`
  display: flex;
  height: 7rem;
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const Image = styled.img`
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ReleaseCardDetails = styled.div`
  padding: ${({ theme }) => theme.defaultMargin};

  > p {
    font-size: ${({ theme }) => theme.fontSize.small};
    margin-bottom: 0.3rem;
  }
`;

export default ReleaseCard;
