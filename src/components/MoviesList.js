import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import { ThreeBounce } from 'better-react-spinkit'
import ScrollToTop from 'react-scroll-up';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class MoviesList extends React.Component {

  componentDidMount() {
    this.props.getLatestMoviesFetch();
  }

  render() {
    const results = this.props.movies;

    if (this.props.isLoading) {
      return <ThreeBounce className="spinner" size={50} color="#01d277" />
    }

    if (this.props.isFailed) {
      return (
        <React.Fragment>
          <p className="failed">{this.props.isFailed}</p>
          <Link className="button" to="/movies">Back to Movies List</Link>
        </React.Fragment>
      )
    }

    return (
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
        <ScrollToTop showUnder={160} style={{right: 200}}>
          <i className="scroll-up"></i>
        </ScrollToTop>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.items,
    isLoading: state.movies.isLoading,
    isFailed: state.movie.isFailed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestMoviesFetch: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
