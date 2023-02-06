export interface User {
  name: string;
};

export interface FilmOrSerie {
  id: number;
  title: string;
  adult: boolean;
  original_title?: string;
  poster_path?: string;
};

export interface HomeListItem {
  slug: string;
  title: string;
  items: FilmOrSerie[];
  adult: boolean;
};

export interface FeatureMovieData {
  title: string;
  backdrop_path: string;
  genres: [{
    name: string,
  }
  ];
  overview: string;
};
