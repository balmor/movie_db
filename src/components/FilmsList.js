import React from 'react';
import Movie from './Movie';

import { connect } from 'react-redux';
import { getLatestMovies } from '../redux/actions/films';

class FilmsList extends React.Component {

  componentDidMount() {
    this.props.getLatestMoviesFetch();
  }

  render() {
    let arr = this.props.films;
    console.log(arr);

    return (
      <div className="container">
        <div className="movies">
          {arr.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster_path}
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
    getLatestMoviesFetch: () => dispatch(getLatestMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
