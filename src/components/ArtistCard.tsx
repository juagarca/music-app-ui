import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ROUTES from "../routes";
import { Artist } from "../types";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const navigate = useNavigate();
  const { _id, photoUrl } = artist;

  return (
    <ArtistCardWrapper
      style={{
        backgroundImage: `url('${photoUrl}')`,
      }}
      onClick={() => navigate(`${ROUTES.artists}/${_id}`)}
    />
  );
};

const ArtistCardWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
`;

export default ArtistCard;
