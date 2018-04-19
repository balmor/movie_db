import React from 'react';
import Movie from './Movie';
import { ThreeBounce } from 'better-react-spinkit'
import ScrollToTop from 'react-scroll-up';
import Failed from './Failed';

import { connect } from 'react-redux';
import { searchData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class Search extends React.Component {

  componentDidMount() {
    const searchQuery = 'coco';
    this.props.fetchSearch(searchQuery);
  }

  handleSearchSubmit = (e) => {

    e.preventDefault();

  }

  render() {
    console.log(this.props);
    const results = this.props.items;
    const {totalResults, currentPage, totalPages} = this.props;

    if (this.props.isLoading) {
      return <ThreeBounce className="spinner" size={50} color="#01d277" />
    }

    if (this.props.isFailed) {
      return <Failed isError={this.props.isFailed} />
    }

    return (
      <React.Fragment>
        <form className="search" onSubmit={this.handleSearchSubmit}>
          <input className="search__input" type="text" name="search" placeholder="Search Movie Title..." />
          <button className="search__submit icon-magnifier icons" type="submit" value="Submit" ></button>
        </form>

        <div className="seacrh__results">
          <p>Total results: {totalResults} / Current page: {currentPage} / Total pages: {totalPages}</p>
        </div>

        <div className="movies">
          {results.map((movie) => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              movieTitle={movie.title}
              moviePoster={movie.poster_path ? `${settings.baseImageUrl}${settings.imageSize}${movie.poster_path}`: undefined}
              movieLink={`/movie/${movie.id}`}
            />
          ))}
        </div>

        <ScrollToTop showUnder={160} style={{right: 200}}>
          <i className="scroll-up"></i>
        </ScrollToTop>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  const { items, totalResults, totalPages, currentPage, isLoading, isFailed } = state.search;
  return { items, totalResults, totalPages, currentPage, isLoading, isFailed }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (query) => dispatch(searchData(query))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
