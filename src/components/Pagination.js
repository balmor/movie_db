import React from 'react';
import PropTypes  from 'prop-types';

const Pagination = (props) => {
  const prevDisabled = props.currentPage === 1,
        nextDisabled = props.currentPage === props.totalPages,
        hasResults = props.totalResults > 1;

  return (
    <React.Fragment>
      {hasResults &&
      <div className="pagination">
        <button className="pagination__button button" onClick={props.handlePrevPage} disabled={prevDisabled}>
          {props.first}
        </button>
        <button className="pagination__button button" onClick={props.handlePrevPage} disabled={prevDisabled}>
          {props.prev}
        </button>
        <p className="pagination__currentPage">
          {props.currentPage}
        </p>
        <button className="pagination__button button" onClick={props.handleNextPage} disabled={nextDisabled}>
          {props.next}
        </button>
        <button className="pagination__button button" onClick={props.handleNextPage} disabled={nextDisabled}>
          {props.last}
        </button>
      </div>
      }
    </React.Fragment>
  )
}

Pagination.propTypes = {
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
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
