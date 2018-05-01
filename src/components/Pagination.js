import React from 'react';
import PropTypes  from 'prop-types';

const Pagination = (props) => {
  const prevDisabled = props.currentPage === 1,
        nextDisabled = props.currentPage === props.totalPages,
        hasResults = props.totalResults > 1;

  const handlePage = (pageNumber) => () => {
    const { currentPage, totalPages, query, fetchSearch } = props;

    let destPage = (function(pageNumber) {
      switch(pageNumber) {
        case 'firstPage':
          return 1;
        case 'prevPage':
          return currentPage - 1;
        case 'nextPage':
          return currentPage + 1;
        case 'lastPage':
          return totalPages;
        default:
          return null;
      }
    })(pageNumber)

    if (destPage === 0 || destPage > totalPages) {
      return;
    }

    fetchSearch(query, destPage);
  }

  return (
    <React.Fragment>
      {hasResults &&
      <div className="pagination">
        <button className="pagination__button button" onClick={handlePage('firstPage')} disabled={prevDisabled}>
          {props.first}
        </button>
        <button className="pagination__button button" onClick={handlePage('prevPage')} disabled={prevDisabled}>
          {props.prev}
        </button>
        <p className="pagination__currentPage">
          {props.currentPage}
        </p>
        <button className="pagination__button button" onClick={handlePage('nextPage')} disabled={nextDisabled}>
          {props.next}
        </button>
        <button className="pagination__button button" onClick={handlePage('lastPage')} disabled={nextDisabled}>
          {props.last}
        </button>
      </div>
      }
    </React.Fragment>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number
}

Pagination.defaultProps = {
  prev: 'prev',
  next: 'next',
  first: 'first',
  last: 'last'
}

export default Pagination;
