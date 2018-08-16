import {combineReducers} from 'redux';
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_GENRE, FETCH_GENRE_SUCCESS, FETCH_GENRE_FAILURE, ADD_GENRE_ID, REMOVE_GENRE_ID, SET_RATING} from '../actions';

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
  case FETCH_MOVIES:
    return {...state, isFetching:true};
  case FETCH_MOVIES_SUCCESS:
    return {...state, isFetching:false, items:action.data};
  case FETCH_MOVIES_FAILURE:
    return {...state, isFetching:false, error:action.data};
  default:
    return state;
  }
};

const genreListStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const genreList = (state = genreListStateList, action) => {
  switch (action.type){
    case FETCH_GENRE:
      return {...state, isFetching:true};
    case FETCH_GENRE_SUCCESS:
      return {...state, isFetching:false, items:action.data};
    case FETCH_GENRE_FAILURE:
      return {...state, isFetching:false, error:action.data};
    default:
      return state;
  }
}

const filtersState = {
  rating: 3,
  genreIds: [],
};

const filters = (state = filtersState, action) => {
  let genreIds = []
  switch (action.type) {
    case ADD_GENRE_ID:
      genreIds = state.genreIds

      if(genreIds.indexOf(action.id < 0)){
        genreIds.push(action.id)
      }

      return {...state, genreIds}
    case REMOVE_GENRE_ID:
      let index = state.genreIds.indexOf(action.id)
      genreIds = state.genreIds

      if (index > -1) {
        genreIds.splice(index, 1);
      }

      return { ...state, genreIds}
    case SET_RATING:
        return {
          ...state,
          rating: action.value,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movieList,
  genreList,
  filters
});

export default rootReducer;
