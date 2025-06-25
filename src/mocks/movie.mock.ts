import { MediaType } from '@core/models/media-type.model';
import { Movie } from '@core/models/movie.model';

export namespace MockMovie {
  export const getMovies = (): Movie[] => {
    return [
      {
        adult: false,
        backdrop_path: '/backdrop1.jpg',
        genre_ids: [28, 12],
        id: 101,
        original_language: 'en',
        original_title: 'Original Title 1',
        overview: 'Overview of movie 1',
        popularity: 100.5,
        poster_path: '/poster1.jpg',
        release_date: '2023-05-01',
        title: 'Movie Title 1',
        video: false,
        vote_average: 7.8,
        vote_count: 1500,
        media_type: MediaType.MOVIE,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [16, 35],
        id: 102,
        original_language: 'en',
        original_title: 'Original Title 2',
        overview: 'Overview of movie 2',
        popularity: 70.3,
        poster_path: '/poster2.jpg',
        release_date: '2024-01-15',
        title: 'Movie Title 2',
        video: false,
        vote_average: 8.2,
        vote_count: 2000,
        media_type: MediaType.MOVIE,
      },
    ];
  };
}
