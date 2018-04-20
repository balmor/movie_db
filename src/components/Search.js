import React from 'react';
import Movie from './Movie';
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

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const {queryText} = this.state;

    if (queryText !== '') {
      this.props.fetchSearch(queryText);
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      queryText: e.target.value
    })
  }

  render() {
    //console.log(this.props);
    const results = this.props.items;
    const {totalResults, currentPage, totalPages, isLoading, isFailed} = this.props;

    return (
      <React.Fragment>
        <form
          className="search"
          onSubmit={this.handleSearchSubmit}>
          <input
            className="search__input"
            onChange={this.handleSearchInput}
            type="text"
            name="search"
            placeholder="Search Movie Title..."
            autoComplete="off"
          />
          <button
            className="search__submit icon-magnifier icons"
            type="submit"
            value="Submit"
          ></button>
        </form>

        {isFailed && <Failed isError={isFailed} />}

        {totalResults > 0 &&
          <div className="search__results">
            <p>Total results: {totalResults} <span className="search__results--sep">|</span> Current page: {currentPage} <span className="search__results--sep">|</span> Total pages: {totalPages}</p>
          </div>
        }


        {isLoading && <ThreeBounce className="spinner" size={50} color="#01d277" />}

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
