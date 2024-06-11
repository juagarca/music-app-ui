import axios from "axios";

import { IArtist } from "./types";

const fetchArtist = async (artistId: string) => {
  const response = await axios.get<IArtist>(
    `http://localhost:8000/artists/${artistId}`
  );

  return response.data;
};

const fetchArtists = async () => {
  const response = await axios.get<IArtist[]>("http://localhost:8000/artists");

  return response.data;
};

export { fetchArtist, fetchArtists };
