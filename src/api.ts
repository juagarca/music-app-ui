import axios from "axios";

import { IArtist, IFollowingStatus } from "./types";

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

const fetchFollowingStatus = async (userId: string, artistId: string) => {
  const response = await axios.get<IFollowingStatus>(
    `http://localhost:8000/following`,
    {
      params: {
        userId: userId,
        artistId: artistId,
      },
    }
  );

  return response.data;
};

const updateFollowing = async (
  currentUser: string,
  artistId: string,
  follow: boolean
) => {
  const response = await axios.patch<IArtist[]>(
    "http://localhost:8000/following/update",
    {
      userId: currentUser,
      artistId: artistId,
      follow: follow,
    }
  );

  return response.data;
};

export { fetchArtist, fetchArtists, fetchFollowingStatus, updateFollowing };
