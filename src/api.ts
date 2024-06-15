import axios from "axios";

import { IArtist, IListRelease, IRelease, ITrack } from "./types";

const fetchArtist = async (artistId: string) => {
  const response = await axios.get<IArtist>(
    `http://localhost:8000/artists/${artistId}`
  );

  return response.data;
};

const fetchArtists = async (query: string = "") => {
  const response = await axios.get<IArtist[]>(
    `http://localhost:8000/artists?query=${query}`
  );

  return response.data;
};

const fetchRelease = async (releaseId: string) => {
  const response = await axios.get<IRelease>(
    `http://localhost:8000/releases/${releaseId}`
  );

  return response.data;
};

const fetchReleases = async (artistId: string) => {
  const response = await axios.get<IRelease[]>(
    `http://localhost:8000/releases?artistId=${artistId}`
  );

  return response.data;
};

const fetchPendingReleases = async () => {
  const response = await axios.get<IListRelease[]>(
    `http://localhost:8000/releases/pending`
  );

  return response.data;
};

const fetchUpcomingReleases = async () => {
  const response = await axios.get<IListRelease[]>(
    `http://localhost:8000/releases/upcoming`
  );

  return response.data;
};

const fetchTracks = async (releaseId: string) => {
  const response = await axios.get<ITrack[]>(
    `http://localhost:8000/tracks?releaseId=${releaseId}`
  );

  return response.data;
};

const updateArtistFollowed = async (artistId: string, followed: boolean) => {
  const response = await axios.patch<IArtist>(
    `http://localhost:8000/artists/${artistId}?followed=${followed}`
  );

  return response.data;
};

const updateTrackListened = async (trackId: string, listened: boolean) => {
  const response = await axios.patch<IArtist>(
    `http://localhost:8000/tracks/${trackId}?listened=${listened}`
  );

  return response.data;
};

export {
  fetchArtist,
  fetchArtists,
  fetchRelease,
  fetchReleases,
  fetchPendingReleases,
  fetchUpcomingReleases,
  fetchTracks,
  updateArtistFollowed,
  updateTrackListened,
};
