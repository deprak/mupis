import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import ImageViewer from './ImageViewer'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setMovieDetails, setIsLoading } from '../store/actions/moviesActions'


function MovieCard({ movie }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  function onTap({ nativeEvent }) {
    if (nativeEvent.state === State.ACTIVE) {
      navigation.navigate('Movie', { movie })
    }
  }


  return (
    <TapGestureHandler
      onHandlerStateChange={onTap}
    >
      <View style={styles.card}>
        <ImageViewer
          width="75%"
          height="100%"
          url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Text style={styles.title}>{movie.original_title}</Text>
      </View>
    </TapGestureHandler>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    alignItems: 'center',
    width: '50%',
    height: 250,
    marginBottom: 5
  },
  title: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 2
  }
})

export default MovieCard