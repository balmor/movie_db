import React from 'react';
import Movie from './Movie';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class MoviesList extends React.Component {

  componentDidMount() {
    this.props.getLatestMoviesFetch();
  }

  render() {
    const results = this.props.movies;

    return (
      <div className="container">
        <div className="movies">
          {results.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={`${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`}
              movieLink={`/movie/${movie.id}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestMoviesFetch: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
