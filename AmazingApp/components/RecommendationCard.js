import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import ImageViewer from './ImageViewer'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setIsLoading } from '../store/actions/moviesActions'

function RecommendationCard({ movie }) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  function onTap({ nativeEvent }) {
    if (nativeEvent.state === State.ACTIVE) {
      dispatch(setIsLoading(true))
      navigation.push('Movie', { movie })
    }
  }

  return (
    <TapGestureHandler
      onHandlerStateChange={onTap}
    >
      <View style={{width: 210, height: 280}}>
        <ImageViewer
          width="100%"
          height="100%"
          url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </View>
    </TapGestureHandler>
  )
}


export default RecommendationCard