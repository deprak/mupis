import {
  PUSH_MOVIES, 
  SET_MOVIE_DETAILS, 
  PUSH_RECOMMENDATIONS, 
  SET_IS_LOADING,
  PUSH_SEARCH_RESULT,
  SET_ERROR,
  PUSH_POPULAR
 } from '../actionsType'
import myAxios from '../../configs/axios'
import axios from 'axios'

const api_key = '14ab2076da42be9a9bfb79d4b162d799'

export function pushMovies(movies) {
  return {
    type: PUSH_MOVIES,
    movies
  }
}

export function pushPopular(movies) {
  return {
    type: PUSH_POPULAR,
    movies
  }
}

export function setMovieDetails(movie) {
  return {
    type: SET_MOVIE_DETAILS,
    movie
  }
}

export function pushRecommendations(movies) {
  return {
    type: PUSH_RECOMMENDATIONS,
    movies
  }
}

export function setIsLoading(isLoading) {
  return {
    type: SET_IS_LOADING,
    isLoading
  }
}

export function pushSearchResult(movies) {
  return {
    type: PUSH_SEARCH_RESULT,
    movies
  }
}

export function setError(error) {
  return {
    type: SET_ERROR,
    error
  }
}

export function fetchNowPlaying(){
  return function(dispatch) {
    dispatch(setIsLoading(true))
    myAxios({
      method: 'get',
      url: `/now_playing`,
      params: {
        api_key,
        language: 'en-US',
        page: '1',
        region: 'id'
      }
    })
      .then(({ data }) => {
        dispatch(pushMovies(data.results))
        dispatch(setIsLoading(false))
      })
      .catch(err => {
        dispatch(setError(err.status_message))
        dispatch(setIsLoading(false))
      })
  }
}

export function getMovieDetails(movieId) {
  return function(dispatch) {
    dispatch(setIsLoading(true))
    myAxios({
      method: 'get',
      url: `/${movieId}`,
      params: {
        api_key,
        language: 'en-US',
      }
    })
      .then(({ data }) => {
        dispatch(setMovieDetails(data))
        dispatch(setIsLoading(false))
      })
      .catch(err => {
        dispatch(setError(err.status_message))
        dispatch(setIsLoading(false))
      })
    }
  }
  
export function getRecommendations(movieId) {
  return function(dispatch) {
    myAxios({
      method: 'get',
      url: `/${movieId}/recommendations`,
      params: {
        api_key,
        language: 'en-US',
        page: '1'
      }
    })
    .then(({ data }) => {
      dispatch(pushRecommendations(data.results))
    })
    .catch(err => {
      dispatch(setError(err.status_message))
    })
  } 
}

export function fetchSearch(title) {
  return function(dispatch) {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key,
        query: title,
        page: '1'
      }
    })
    .then(({ data }) => {
      dispatch(pushMovies(data.results))
    })
    .catch(err => {
      dispatch(setError(err.status_message))
    })
  }
}

export function fetchPopular(title) {
  return function(dispatch) {
    myAxios({
      method: 'get',
      url: '/popular',
      params: {
        api_key,
        language: 'en-US',
        query: title,
        page: 1,
        region: 'id'
      }
    })
    .then(({ data }) => {
      dispatch(pushPopular(data.results))
    })
    .catch(err => {
      dispatch(setError(err.status_message))
    })
  }
}