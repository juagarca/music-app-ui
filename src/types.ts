interface Artist {
  _id: string;
  artistName: string;
  name?: string;
  dateOfBirth?: Date;
  placeOfBirth?: string;
  bio?: string;
  members: string[];
}

interface Favourite {
  id: string;
  artistId: string;
  userId: string;
}

export type { Artist, Favourite };
