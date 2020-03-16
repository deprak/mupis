import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StatusBar, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from '../components/MovieCard'
import DetailLoader from '../components/DetailLoader'
import ErrorMessage from '../components/ErrorMessage'
import { fetchPopular } from '../store/actions/moviesActions'

function PopularList() {
  const movies = useSelector(state => state.movies.popular)
  const isLoading = useSelector(state => state.movies.isLoading)
  const error = useSelector(state => state.movies.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPopular())
  }, [])

  function renderer() {
    if (error) {
      return (
        <ErrorMessage message={error} />
      )
    } else if (isLoading) {
      return <DetailLoader />
    } else {
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <Text style={{padding: 10, fontWeight: 'bold'}}>Popular movies in Indonesia</Text>
          <FlatList
            style={{}} 
            data={movies}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <MovieCard movie={item} />
              )
            }}
            numColumns={2}
          />
        </>
      )
    }
  }
  return renderer()
}

export default PopularList