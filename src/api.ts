import axios from "axios";

import { Artist } from "./types";

const fetchArtists = async () => {
  const response = await axios.get<Artist[]>("http://localhost:8000/artists");

  return response.data;
};

export { fetchArtists };
