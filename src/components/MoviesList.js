import React from 'react';
import Movie from './Movie';
import { ThreeBounce } from 'better-react-spinkit'
import ScrollToTop from 'react-scroll-up';
import Failed from './Failed';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class MoviesList extends React.Component {

  componentDidMount() {
    this.props.getLatestMoviesFetch();
  }

  handleMovieId = (e) => {
    e.preventDefault();
    console.log('click works');
  }

  render() {
    const results = this.props.movies;

    if (this.props.isLoading) {
      return <ThreeBounce className="spinner" size={50} color="#01d277" />
    }

    if (this.props.isFailed) {
      return <Failed isError={this.props.isFailed} />
    }

    return (
      <div className="movies">
        {results.map((movie) => (
          <div key={movie.id}>
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={`${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`}
              movieLink={`/movie/${movie.id}`}
              handleMovieId={this.handleMovieId}
            />
          </div>
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
    isFailed: state.movie.isFailed,
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLatestMoviesFetch: () => dispatch(getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
