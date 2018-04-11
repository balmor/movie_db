import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/films';
import { settings } from '../services/ApiSettings';

class FilmsList extends React.Component {

  componentDidMount() {
    this.props.getLatestMoviesFetch();
  }

  render() {
    const results = this.props.films;
    console.log(results);

    return (
      <div className="container">
        <div className="movies">
          <Link to="/movies" className="link">My API</Link>
          {results.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={`${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`}
              movieLink={`/film/${movie.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      films: state.films
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestMoviesFetch: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
