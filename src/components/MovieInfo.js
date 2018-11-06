import React from 'react';

import { connect } from 'react-redux';
import { getData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class MovieInfo extends React.Component {

  componentDidMount() {
    //this.props.getLatestMoviesFetch();
  }

  render() {

    return (
      <div className="movies">
        Detail info
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
