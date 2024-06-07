import axios from "axios";

import { Artist, Favorite } from "./types";

const fetchArtist = async (artistId: string) => {
  const response = await axios.get<Artist>(
    `http://localhost:8000/artists/${artistId}`
  );

  return response.data;
};

const fetchArtists = async () => {
  const response = await axios.get<Artist[]>("http://localhost:8000/artists");

  return response.data;
};

const fetchFavourites = async (userId: string) => {
  const response = await axios.get<Favorite[]>(
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

export { fetchArtist, fetchArtists, fetchFavourites, addFavourite };
