interface IArtist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  bio?: string;
  members: string[];
  photoUrl?: string;
  followed: boolean;
}

interface IFeaturingArtist {
  artistId: string;
  artistName: string;
}

interface IFollowingStatus {
  status: "following" | "unfollowed";
}

interface IRelease {
  _id: string;
  name: string;
  artistId: string;
  artistName: string;
  type: "ALBUM" | "EP" | "MIXTAPE" | "SINGLE";
  releaseDate: string;
  duration: number;
  photoUrl?: string;
  tracks: ITrack[];
}

interface ITrack {
  name: string;
  number: number;
  duration: number;
  listened: boolean;
  featuring?: IFeaturingArtist[];
}

export type { IArtist, IFeaturingArtist, IFollowingStatus, IRelease, ITrack };
