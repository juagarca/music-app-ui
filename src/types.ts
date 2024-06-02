interface Artist {
  id: string;
  name: string;
  birthday: string;
}

interface Favourite {
  id: string;
  artistId: string;
  userId: string;
}

export type { Artist, Favourite };
