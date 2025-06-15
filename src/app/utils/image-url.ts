const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const TMDB_MEDIA_BASE_URL = 'https://media.themoviedb.org/t/p';
const POSTER_SIZE = 'w300';
const PROFILE_SIZE = 'w120_and_h133_face';

export const buildImageUrl = (path: string | null, size: string): string => {
  return path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : '';
};

export const buildProfileImageUrl = (path: string | null): string => {
  return path ? `${TMDB_MEDIA_BASE_URL}/${PROFILE_SIZE}${path}` : '';
};
