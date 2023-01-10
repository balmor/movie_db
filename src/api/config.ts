type Api = {
  baseUrl: string;
  topRated: string;
  singleMovie: string;
  searchMovie: string;
  language: string;
  api_key?: string;
  auth_token?: string;
  baseImageUrl: string;
  imageSize: string;
  error: string;
};

export type Params = {
  language: string;
  query?: string;
  page?: number | string;
};

const api: Api & Params = {
  baseUrl: 'https://api.themoviedb.org',
  topRated: '/3/movie/top_rated',
  singleMovie: '/3/movie/',
  searchMovie: '/3/search/movie',
  language: 'en-GB',
  api_key: process.env.REACT_APP_API_KEY,
  auth_token: process.env.REACT_APP_AUTH_TOKEN,
  baseImageUrl: 'https://image.tmdb.org',
  imageSize: '/t/p/w500',
  error: 'Something went wrong',
};

const headers = {
  Authorization: `Bearer ${api.auth_token}`,
};

const params = new URLSearchParams({
  language: api.language,
  page: '1',
});

export default {
  api,
  headers,
  params,
};

export const githubRepoLink = 'https://github.com/balmor/movie_db';
