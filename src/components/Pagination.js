import React from 'react';
import PropTypes  from 'prop-types';

const Pagination = (props) => {
  const prevDisabled = props.currentPage === 1,
        nextDisabled = props.currentPage === props.totalPages,
        hasResults = props.totalResults > 1;

  const handlePage = (pageNumber) => () => {
    const { currentPage, totalPages, query, fetchSearch } = props;
    const destPage = (function() {
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
    })()

    if (destPage === 0 || destPage > totalPages) {
      return;
    }

    fetchSearch(query, destPage);
  }

  const destinationPage = (pageNumber) => () => {
    const { query, fetchSearch } = props;

    fetchSearch(query, pageNumber);
  }

  const createButtons = () => {
    const { currentPage, totalPages } = props;
    let item, items = [];
    const destPage = (function() {
      switch(true) {
        case (currentPage < 3 || currentPage === 2):
          return 0;
        case (currentPage === totalPages):
          return currentPage - 5;
        case (currentPage + 1 === totalPages):
          return currentPage - 4;
        default:
          return currentPage - 3;
      }
    })()

    for ( let i = destPage + 1; i < destPage + 6; i++ ) {
      item = i ===  currentPage ?
      (<p key={i} className="pagination__currentPage">{i}</p>) :
      (<button key={i} className="pagination__button button" onClick={destinationPage(i)}>{i}</button>);
      if (i > totalPages) {
        break;
      }

      items.push(item)
    }

    return items;
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
        {createButtons()}
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
  totalResults: PropTypes.number,
  query: PropTypes.string,
  fetchSearch: PropTypes.func
}

Pagination.defaultProps = {
  prev: 'prev',
  next: 'next',
  first: 'first',
  last: 'last'
}

export default Pagination;
