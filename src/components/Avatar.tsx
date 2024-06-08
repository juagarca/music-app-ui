import styled from "styled-components";

import avatar from "../assets/avatar.png";

const Avatar = () => {
  return <AvatarWrapper />;
};

const AvatarWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${avatar});
`;

export default Avatar;
