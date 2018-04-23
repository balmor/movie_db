import React from 'react';
import PropTypes  from 'prop-types';

const SearchBox = (props) => (
  <form
    className="search"
    onSubmit={props.handleSearchSubmit}
    >
    <input
      className="search__input"
      onChange={props.handleSearchInput}
      type="text"
      name="search"
      placeholder={props.searchPlaceholder}
      autoComplete="off"
    />
    <button
      className="search__submit icon-magnifier icons"
      type="submit"
      value="Submit"
    ></button>
  </form>
)

SearchBox.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired
}

SearchBox.defaultProps = {
  searchPlaceholder: 'Search Movie Title...'
}

export default SearchBox;
