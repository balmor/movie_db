/* eslint
  no-undef: 0,
*/

export const settings = {
  baseUrl: 'https://api.themoviedb.org',
  topRated: '/3/movie/top_rated',
  singleMovie: '/3/movie/',
  language: 'pl-PL',
  api_key: process.env.REACT_APP_API_KEY,
  baseImageUrl: 'https://image.tmdb.org',
  imageSize: '/t/p/w500',
  error: 'Something went wrong'
}
