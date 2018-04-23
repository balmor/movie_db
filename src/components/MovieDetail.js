import React from 'react';
import { Link } from 'react-router-dom';
import { ThreeBounce } from 'better-react-spinkit'
import Failed from './Failed';
import tmdbSquare from '../../public/images/tmdb-square.svg';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class MovieDetail extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.movieId;
    this.props.getSingleMovieFetch(id);
  }

  render() {
    const movie = this.props.movie;
    //console.log('props', this.props);
    const tmdbPoster = movie.poster_path ? `${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}` : tmdbSquare;

    if (this.props.isLoading) {
      return <ThreeBounce
              className="spinner"
              size={50}
              color="#01d277"
            />
    }

    if (this.props.isFailed) {
      return <Failed isError={this.props.isFailed} />
    }

    return (
      <React.Fragment>
        <div className="movies">
          <div className="movies__box movies__box--detail">
            <img
              className="movies__poster"
              src={tmdbPoster}
              alt={movie.title}
            />
            <h2 className="movies__title movies__title--center">{movie.title}</h2>
            <p className="movies__description">{movie.overview}</p>
          </div>
        </div>
        <Link className="button" to="/">Back to Homepage</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      movie: state.movie.item,
      isLoading: state.movie.isLoading,
      isFailed: state.movie.isFailed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleMovieFetch: (id) => dispatch(getData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
