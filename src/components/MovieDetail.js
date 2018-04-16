import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

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

    if (this.props.isLoading) {
      return <Spinner name="cube-grid" color="steelblue" />;
    }

    if (this.props.isFailed) {
      return <p>{this.props.isFailed}</p>;
    }

    return (
      <React.Fragment>
        <Spinner name="cube-grid" color="steelblue" />
        <div className="movies">
          <div className="movies__box movies__box--detail">
            <img className="movies__poster" src={`${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`} alt={movie.title} />
            <h2 className="movies__title movies__title--center">{movie.title}</h2>
            <p className="movies__description">{movie.overview}</p>
          </div>
        </div>
        <Link className="button" to="/movies">Back to Movies List</Link>
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
