import { useQuery } from "@tanstack/react-query";

import { fetchArtists, addFavourite } from "../api";
import { Artist } from "../types";

const Artists = () => {
  const userId = "a9257ee7-f5ed-48d9-b93a-76131c9e11b0";
  const { data, isLoading, error } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtists,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const handleOnClick = (artistId: string) => {
    addFavourite(artistId, userId);
  };

  return (
    <>
      <h1>Artists</h1>
      <ul>
        {data?.map((artist: Artist) => (
          <li key={artist.id}>
            {artist.name}
            <button onClick={() => handleOnClick(artist.id)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Artists;
