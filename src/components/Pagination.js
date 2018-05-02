import React from 'react';
import PropTypes  from 'prop-types';

const Pagination = (props) => {
  const prevDisabled = props.currentPage === 1,
        nextDisabled = props.currentPage === props.totalPages,
        hasResults = props.totalResults > 1,
        buttons = [],
        qtyButtons = 3;

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
  
  const destinationPage = (pageNumber) => () => {
    const { currentPage, totalPages, query, fetchSearch } = props;

    fetchSearch(query, pageNumber);
  }

  const createButton = () => {
    const { currentPage, totalPages } = props;
    
    let destPage;
    if (currentPage < 3) {
      destPage = 1
    } else if (currentPage === 2) {
      destPage = 1
    } else {
      destPage = currentPage - 2
    }

    for ( let i = destPage; i < destPage + 4; i++ ) {
      buttons.push(
        <button key={i + 1} className="pagination__button button" onClick={destinationPage(i + 1)}>
          {i + 1}
        </button>
      )

      console.log(buttons)
    }

    return buttons;
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
        {createButton()}
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
