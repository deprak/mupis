import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { ScrollView, FlatList, TouchableOpacity, TapGestureHandler, State } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getRecommendations } from '../store/actions/moviesActions'
import RecommendationCard from './RecommendationCard'
import { useNavigation } from '@react-navigation/native'

function MoviesRecommendation(props) {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.recommendations)
  const navigation = useNavigation()

  useEffect(() => {
    dispatch(getRecommendations(props.movieId))
  }, [])

  function itemId(item) {
    if (item) {
      return item.id
    }
  }

  function itemUrl(item) {
    if (item) {
      return item.poster_path
    }
  }

  function onTap(e, movie) {
    if (e.nativeEvent.state === State.ACTIVE) {
      navigation.navigate('Movie', { movie })
    }  
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={movies}
        keyExtractor={( item ) => String(itemId(item))}
        renderItem={({ item }) => {
          return (
            <RecommendationCard movie={item} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  }
})

export default MoviesRecommendation