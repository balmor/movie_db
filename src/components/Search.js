import React from 'react';
import Movie from './Movie';
import SearchBox from './SearchBox';
import Pagination from './Pagination';
import Notification from './Notification';
import Failed from './Failed';

import { ThreeBounce } from 'better-react-spinkit'
import ScrollToTop from 'react-scroll-up';

import { connect } from 'react-redux';
import { searchData } from '../redux/actions/movies';
import { settings } from '../services/ApiSettings';

class Search extends React.Component {
  state = {
    queryText: '',
    page: 1
  }

  componentWillReceiveProps(props) {
    this.setState({
      page: props.currentPage
    })
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

  handlePage = (pageNumber) => () => {
    const { currentPage, totalPages } = this.props;
    let destPage;

    pageNumber === 'nextPage' ? destPage = currentPage + 1 : destPage = currentPage - 1;

    if (destPage === 0 || destPage > totalPages) {
      return;
    }

    this.props.fetchSearch(this.state.queryText, destPage);
  }

  render() {
    const results = this.props.items;
    const {totalResults, currentPage, totalPages, isLoading, isFailed} = this.props;

    return (
      <React.Fragment>
        <SearchBox
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <Notification 
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />

        <Pagination
          handlePrevPage={this.handlePage('prevPage')}
          handleNextPage={this.handlePage('nextPage')}
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />

        {isFailed && <Failed isError={isFailed} />}

        {isLoading ?
        <ThreeBounce className="spinner" size={50} color="#01d277" /> :
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
        }

        <Pagination
          handlePrevPage={this.handlePage('prevPage')}
          handleNextPage={this.handlePage('nextPage')}
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
        />

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
    fetchSearch: (query, page) => dispatch(searchData(query, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);