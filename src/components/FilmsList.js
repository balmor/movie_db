import React from 'react';

class FilmsList extends React.Component {

  componentWillMount() {
    //this.props.getLatestMovies();
  }

  render() {
    return (
      <div className="container">
        <div className="movies">
            Films
        </div>
      </div>
    );
  }
}

export default FilmsList;
