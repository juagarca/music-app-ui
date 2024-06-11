interface IArtist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  bio?: string;
  members: string[];
  photoUrl?: string;
}

interface IRelease {
  _id: string;
  name: string;
  artist: string;
  type: "ALBUM" | "EP" | "SINGLE";
  releaseDate?: string;
  duration: number;
  photoUrl?: string;
  tracks: ITrack[];
}

interface ITrack {
  name: string;
  number: number;
  artistIds: string[];
  duration: number;
}

export type { IArtist, IRelease, ITrack };
