import { 
  PUSH_MOVIES,
  SET_MOVIE_DETAILS,
  PUSH_RECOMMENDATIONS, 
  SET_IS_LOADING,
  SET_ERROR,
  PUSH_POPULAR
} from '../actionsType'

const initialState = {
  nowPlaying: [],
  movieDetails: null,
  recommendations: [],
  isLoading: false,
  error: null,
  popular: []
}

export default function moviesReducer(state = initialState, action) {
  switch(action.type) {
    case PUSH_MOVIES:
      return {
        ...state,
        nowPlaying: [...action.movies]
      }
    case PUSH_POPULAR:
      return {
        ...state,
        popular: [...action.movies]
      }
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.movie
      }
    case PUSH_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: [...action.movies]
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}