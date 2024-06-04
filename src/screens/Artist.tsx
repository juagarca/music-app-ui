import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchArtist } from "../api";

const Artist = () => {
  const { artistId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["artist"],
    queryFn: () => fetchArtist(artistId!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !artistId) return <div>Error!</div>;

  return (
    <>
      <h1>{data?.artistName}</h1>
      <p>{data?.name}</p>
      <p>{data?.dateOfBirth?.toString()}</p>
      <p>{data?.placeOfBirth}</p>
      <p>{data?.bio}</p>
    </>
  );
};

export default Artist;
