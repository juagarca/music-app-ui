import styled from "styled-components";
import pluralize from "pluralize";
import { useNavigate } from "react-router-dom";

import { Heading, Text } from "../components";
import releaseImage from "../assets/release.png";

import { IRelease } from "../types";
import { formatDate, formatSeconds } from "../utils";
import ROUTES from "../routes";

interface ReleaseCardProps {
  release: IRelease;
}

const ReleaseCard = ({ release }: ReleaseCardProps) => {
  const navigate = useNavigate();
  const { _id, name, releaseDate, duration, numberOfTracks, photoUrl } =
    release;

  return (
    <ReleaseCardWrapper onClick={() => navigate(`${ROUTES.releases}/${_id}`)}>
      <Image src={photoUrl ? photoUrl : releaseImage} alt={name} />
      <ReleaseCardDetails>
        <Heading size="h5">{name}</Heading>
        <Text>{`${numberOfTracks} ${pluralize("song", numberOfTracks)}`}</Text>
        <Text>{formatSeconds(duration)}</Text>
        {releaseDate && <Text>{formatDate(releaseDate)}</Text>}
      </ReleaseCardDetails>
    </ReleaseCardWrapper>
  );
};

const ReleaseCardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

const Image = styled.img`
  height: 100%;
  // TODO: make width dynamic
  width: 7rem;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ReleaseCardDetails = styled.div`
  padding: ${({ theme }) => theme.margin.default};

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export default ReleaseCard;
