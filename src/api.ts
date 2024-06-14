// import axios from "axios";

import { IRelease } from "./types";

import artistsDataJson from "./data/artists.json";
import releasesDataJson from "./data/releases.json";

const fetchArtist = async (artistId: string) => {
  if (process.env.NODE_ENV !== "production") {
    return artistsDataJson.find((artist) => artist._id === artistId);
  }

  // const response = await axios.get<IArtist>(
  //   `http://localhost:8000/artists/${artistId}`
  // );
  // return response.data;
};

const fetchArtists = async () => {
  if (process.env.NODE_ENV !== "production") {
    return artistsDataJson;
  }

  // const response = await axios.get<IArtist[]>("http://localhost:8000/artists");
  // return response.data;
};

const fetchReleases = async (artistId: string) => {
  const releasesData = releasesDataJson as IRelease[];
  if (process.env.NODE_ENV !== "production") {
    return releasesData.filter((release) => release.artistId === artistId);
  }
};

const updateFollowed = async (artistId: string, followed: boolean) => {
  // TODO: Make this work with local environment.
  if (process.env.NODE_ENV !== "production") {
    return artistsDataJson.find((artist) => artist._id === artistId);
  }
};

export { fetchArtist, fetchArtists, fetchReleases, updateFollowed };
