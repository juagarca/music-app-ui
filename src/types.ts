interface Artist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: Date;
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

export type { Artist, Favorite };
