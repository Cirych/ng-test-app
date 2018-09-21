export enum genreType {
  action = 'action',
  adventure = 'adventure',
  biography = 'biography',
  comedy = 'comedy',
  crime = 'crime',
  drama = 'drama',
  history = 'history',
  mystery = 'mystery',
  scifi = 'scifi',
  sport = 'sport',
  thriller = 'thriller'
}

export type GenreType = keyof typeof genreType;

export interface Movie {
  id: number;
  key: string;
  name: string;
  description: string;
  genres: GenreType[];
  rate: string;
  length: string;
  img: string;
}
