import styled from "styled-components";

import releaseImage from "../assets/release.png";

import { IRelease } from "../types";

interface ReleaseImageProps {
  release: IRelease;
}

const ReleaseImage = ({ release }: ReleaseImageProps) => {
  const { name, photoUrl } = release;

  return (
    <ReleaseImageWrapper
      src={photoUrl ? photoUrl : releaseImage}
      alt={`${name} cover`}
    />
  );
};

const ReleaseImageWrapper = styled.img`
  height: 25rem;
  width: 25rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

export default ReleaseImage;
