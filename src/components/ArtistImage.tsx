import styled from "styled-components";

interface ArtistImageProps {
  photoUrl: string;
}

const ArtistImage = ({ photoUrl }: ArtistImageProps) => {
  return (
    <ArtistImageWrapper
      style={{
        backgroundImage: `url('${photoUrl}')`,
      }}
    />
  );
};

const ArtistImageWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

export default ArtistImage;
