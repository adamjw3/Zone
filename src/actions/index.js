import {API_KEY, URL_MOVIES, URL_GENRES} from '../const';

// action types
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const FETCH_GENRE = 'FETCH_GENRE';
export const FETCH_GENRE_SUCCESS = 'FETCH_GENRE_SUCCESS';
export const FETCH_GENRE_FAILURE = 'FETCH_GENRE_FAILURE';
export const ADD_GENRE_ID = "ADD_GENRE_ID";
export const REMOVE_GENRE_ID = 'REMOVE_GENRE_ID';
export const SET_RATING = 'SET_RATING';

function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

function fetchGenre() {
  return {
    type: FETCH_GENRE
  };
}

function fetchGenreSuccess(data) {
  return {
    type: FETCH_GENRE_SUCCESS,
    data
  }
}

function fetchGenreFail(error) {
  return {
    type: FETCH_GENRE_FAILURE,
    error
  };
}

export function addGenreId(id) {
  return {
    type: ADD_GENRE_ID,
    id
  };
}

export function removeGenreId(id) {
  return {
    type: REMOVE_GENRE_ID,
    id
  };
}

export function setRating(value) {
  return {
    type: SET_RATING,
    value
  };
};

export function fetchMovieList(){
  const url = URL_MOVIES + API_KEY;
  return function(dispatch){
    dispatch(fetchMovies());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesFail(error)));
  };
}

export function fetchGenreList() {
  const url = URL_GENRES + API_KEY;
  return function(dispatch) {
    dispatch(fetchGenre());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.genres)
      .then(data => dispatch(fetchGenreSuccess(data)))
      .catch(error => dispatch(fetchGenreFail(error)));
  };
}
