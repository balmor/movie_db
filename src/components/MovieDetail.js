import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
      <div className="container">
      <div className="movies">
        {
          !movie.id ?
          (<p>There is no movie on this url</p>) :
          (
          <div className="movies__box movies__box--detail">
            <img className="movies__poster" src={`${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`} alt={movie.title} />
            <h2 className="movies__title movies__title--center">{movie.title}</h2>
            <p className="movies__description">{movie.overview}</p>
          </div>
          )
        }
      </div>
      <Link className="button" to="/movies">Back to Movies List</Link>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      movie: state.movie
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getSingleMovieFetch: (id) => dispatch(getSingleData(id)),
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleMovieFetch: (id) => dispatch(getData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
