import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';
import MovieList from '../components/MovieList/MovieList'
import Genres from '../components/Filters/Genres'
import Rating from '../components/Filters/Rating'

class Home extends Component {
  componentDidMount() {
    this.props.fetchMovieList();
  }

  render() {
    if(this.props.isFetching) {
      return(
        <div>Loading...</div>
      );
    }
    else {
      return(
        <div>
          <Rating></Rating>
          <Genres></Genres>
          <MovieList movieList={this.props.movieList} filters={this.props.filters}></MovieList>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList.items,
    isFetching: state.movieList.isFetching,
    filters: state.filters
  }
}

Home.propTypes = {
  movieList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  filters: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { fetchMovieList })(Home);
