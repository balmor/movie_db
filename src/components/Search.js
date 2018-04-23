import React from 'react';
import Movie from './Movie';
import SearchBox from './SearchBox';
import { ThreeBounce } from 'better-react-spinkit'
import ScrollToTop from 'react-scroll-up';
import Failed from './Failed';

import { connect } from 'react-redux';
import { searchData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class Search extends React.Component {
  state = {
    queryText: ''
  }

  handleSearchInput = (e) => {
    this.setState({
      queryText: e.target.value
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const {queryText} = this.state;

    if (queryText !== '') {
      this.props.fetchSearch(queryText);
    }
  }

  render() {
    const results = this.props.items;
    const {totalResults, currentPage, totalPages, isLoading, isFailed} = this.props;

    return (
      <React.Fragment>
        <SearchBox handleSearchInput={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} />

        {isFailed && <Failed isError={isFailed} />}

        {isLoading && <ThreeBounce className="spinner" size={50} color="#01d277" />}

        {totalResults > 0 &&
          <div className="search__results">
            <p>Total results: {totalResults} <span className="search__results--sep">|</span> Current page: {currentPage} <span className="search__results--sep">|</span> Total pages: {totalPages}</p>
          </div>
        }

        {totalResults === 0 && <p>There is no results</p>}

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
