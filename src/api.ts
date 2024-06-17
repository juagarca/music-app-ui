import axios from "axios";

import { IArtist, IListRelease, IRelease, ITrack } from "./types";

const apiCall = async <Type>(path: string, verb: string = "get") => {
  const url = `${process.env.REACT_APP_API_URL}/${path}`;

  try {
    const response = await axios.request<Type>({ url: url, method: verb });
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

const fetchArtist = async (artistId: string) => {
  const path = `artists/${artistId}`;
  return apiCall<IArtist>(path);
};

const fetchArtists = async (query: string = "") => {
  const path = `artists?query=${query}`;
  return apiCall<IArtist[]>(path);
};

const fetchRelease = async (releaseId: string) => {
  const path = `releases/${releaseId}`;
  return apiCall<IRelease>(path);
};

const fetchReleases = async (artistId: string) => {
  const path = `releases?artistId=${artistId}`;
  return apiCall<IRelease[]>(path);
};

const fetchPendingReleases = async () => {
  const path = `releases/pending`;
  return apiCall<IListRelease[]>(path);
};

const fetchUpcomingReleases = async () => {
  const path = `releases/upcoming`;
  return apiCall<IListRelease[]>(path);
};

const fetchTracks = async (releaseId: string) => {
  const path = `tracks?releaseId=${releaseId}`;
  return apiCall<ITrack[]>(path);
};

const updateArtistFollowed = async (artistId: string, followed: boolean) => {
  const path = `artists/${artistId}?followed=${followed}`;
  return apiCall<IArtist>(path, "patch");
};

const updateTrackListened = async (trackId: string, listened: boolean) => {
  const path = `tracks/${trackId}?listened=${listened}`;
  return apiCall<ITrack>(path, "patch");
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
