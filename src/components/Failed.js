import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

const Failed = (props) => (
  <React.Fragment>
    <p className="failed">{props.isError}</p>
    <Link className="button" to="/movies">Back to Movies List</Link>
  </React.Fragment>
)

Failed.propTypes = {
  isError: PropTypes.string.isRequired
}

export default Failed;
