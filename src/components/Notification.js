import React from 'react';
import PropTypes  from 'prop-types';

const Notification = (props) => {
  const hasResults = props.totalResults > 0,
        noResults = props.totalResults < 1;

  return (
    <React.Fragment>
      {hasResults &&
        <p>
          Total results: {props.totalResults}
          <span className="search__results--sep">|</span>
          Current page: {props.currentPage}
          <span className="search__results--sep">|</span>
          Total pages: {props.totalPages}
        </p>
      }

      {noResults && <p>There is no results</p>}
    </React.Fragment>
  )
}

Notification.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number
}

Notification.defaultProps = {
  prev: 'prev',
  next: 'next',
  first: 'first',
  last: 'last'
}

export default Notification;
