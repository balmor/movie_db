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
    console.log(this.state.queryText === '')

    return (
      <React.Fragment>
        <SearchBox
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        {this.state.queryText !== '' ?
          <React.Fragment>
            <Notification
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={totalResults}
            />

            <Pagination
              fetchSearch={this.props.fetchSearch}
              query={this.state.queryText}
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
              fetchSearch={this.props.fetchSearch}
              query={this.state.queryText}
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
            />
          </React.Fragment>:
          ''
        }

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
