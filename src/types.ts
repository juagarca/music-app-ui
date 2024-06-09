interface Artist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  bio?: string;
  members: string[];
  photoUrl?: string;
}

interface Favorite {
  id: string;
  artistId: string;
  userId: string;
}

interface Release {
  _id: string;
  name: string;
  artist: string;
  type: "ALBUM" | "EP" | "SINGLE";
  releaseDate?: string;
  duration: number;
  photoUrl?: string;
  tracks: Track[];
}

interface Track {
  name: string;
  number: number;
  artistIds: string[];
  duration: number;
}

export type { Artist, Favorite, Release, Track };
