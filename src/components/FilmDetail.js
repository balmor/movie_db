import React from 'react';
import { Link } from 'react-router-dom';

const FilmDetail = ({match}) => {
  console.log(match.params.filmId)

  return (
    <div className="container">
      <div className="movies">
        Single TMDb movie (movieID: {match.params.filmId})
      </div>
      <Link className="button" to="/films">Back to Movies List</Link>
    </div>
  )
}

export default FilmDetail;
