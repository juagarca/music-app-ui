import axios from "axios";

import { Artist, Favourite } from "./types";

const fetchArtists = async () => {
  const response = await axios.get<Artist[]>("http://localhost:8000/artists");

  return response.data;
};

const fetchFavourites = async (userId: string) => {
  const response = await axios.get<Favourite[]>(
    `http://localhost:8000/favourites?userId=${userId}`
  );

  return response.data;
};

const addFavourite = async (artistId: string, userId: string) => {
  return await axios.post(`http://localhost:8000/favourites/create`, {
    artistId: artistId,
    userId: userId,
  });
};

export { fetchArtists, fetchFavourites, addFavourite };
