import { useQuery } from "@tanstack/react-query";

import { fetchFavourites } from "../api";
import { Favorite } from "../types";

const Favourites = () => {
  const userId = "a9257ee7-f5ed-48d9-b93a-76131c9e11b0";
  const { data, isLoading, error } = useQuery({
    queryKey: ["favourites"],
    queryFn: () => fetchFavourites(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <h1>Favourites</h1>
      <ul>
        {data?.map((favourite: Favorite) => (
          <li key={favourite.id}>{favourite.artistId}</li>
        ))}
      </ul>
    </>
  );
};

export default Favourites;
