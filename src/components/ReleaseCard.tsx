import styled from "styled-components";

import { Heading } from "../components";

import image from "../assets/release.png";

const ReleaseCard = () => {
  const releaseName = "Brat";

  return (
    <ReleaseCardWrapper>
      <Image src={image} alt="Release" />
      <ReleaseCardDetails>
        <Heading size="h5">{releaseName}</Heading>
      </ReleaseCardDetails>
    </ReleaseCardWrapper>
  );
};

const ReleaseCardWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
`;

const ReleaseCardDetails = styled.div`
  padding: ${({ theme }) => theme.defaultMargin};
`;

export default ReleaseCard;
