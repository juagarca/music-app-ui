import { useQuery } from "@tanstack/react-query";

import { fetchArtists } from "../api";
import { Artist } from "../types";

const Artists = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <h1>Artists</h1>
      <ul>
        {data?.map((artist: Artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Artists;
