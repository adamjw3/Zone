import React , { Component } from 'react';
import { connect } from 'react-redux';
import { URL_COVER } from '../../const';
import Grid from '@material-ui/core/Grid';

class MovieList extends Component{
  render() {
    let moviesToShow = this.props.movieList;
    const filters = this.props.filters;
    const genreList = this.props.genreList;

    const movieContainer = {
      overflow: 'hidden',
      position: 'relative',
    };

    const movieImage = {
      height: '100%',
      maxWidth: '100%',
      width: '100%'
    }

    const movieTitle = {
      color: '#ffffff',
      fontSize: '18px',
      left: '10px',
      position: 'absolute',
      top: '10px',
      width: '80%'
    }

    const movieMeta = {
      color: '#ffffff',
      bottom: '10px',
      left: '10px',
      position: 'absolute',
      width: '80%'
    }

    if (filters) {
      if(filters.genreIds.length > 0) {
        moviesToShow = moviesToShow.filter((item) =>
          item.genre_ids.some((value) =>
              filters.genreIds.indexOf(value) > -1
          )
        );
      }

      moviesToShow = moviesToShow.filter((item) => item.vote_average >= filters.rating);
    }

    const movies = moviesToShow.map(function(movie) {
      return (
        <Grid key={movie.id} className="movie" style={movieContainer}>
          <img style={movieImage} src={URL_COVER+movie.poster_path} alt={movie.title}/>
          <h2 style={movieTitle}>{movie.title}</h2>
          <div style={movieMeta}>
            <div className="movie__rating">{movie.vote_average}</div>
            <div className="movie__genres-container">
              {
                genreList.filter((genre) => movie.genre_ids.indexOf(genre.id) > -1)
                  .map((genre, index) => (
                      <div key={index} className="movie__genres">
                          {genre.name}
                      </div>
                  ))
              }
            </div>
          </div>
        </Grid>
      )
    });

    return(
      <Grid container justify="center" spacing={16}>
        {movies}
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genreList: state.genreList.items
  }
}

export default connect(mapStateToProps)(MovieList);
