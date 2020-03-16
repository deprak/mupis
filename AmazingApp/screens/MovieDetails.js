import React, { useEffect, useCallback } from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails, setMovieDetails } from '../store/actions/moviesActions'
import ImageViewer from '../components/ImageViewer'
import { ScrollView } from 'react-native-gesture-handler'
import MoviesRecommendation from '../components/MoviesRecommendations'
import MovieDesc from '../components/MovieDesc'
import { createStackNavigator } from '@react-navigation/stack'
import DetailLoader from '../components/DetailLoader'
import { useFocusEffect } from '@react-navigation/native'
import ErrorMessage from '../components/ErrorMessage'

const Stack = createStackNavigator()

function MovieDetails(props) {
  const dispatch = useDispatch()
  const movie = useSelector(state => state.movies.movieDetails)
  const isLoading = useSelector(state => state.movies.isLoading)
  const error = useSelector(state => state.movies.error)

  useFocusEffect(
    useCallback(() => {
      dispatch(getMovieDetails(props.route.params.movie.id))
      return () => {
        dispatch(setMovieDetails(null))
      }
    }, [])
  )  

  function renderDetail() {
    if (error) {
      return (
        <ErrorMessage message={error} />
      )
    } else if (isLoading || !movie) {
      return <DetailLoader />
    } else {
      return (
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '100%', height: 200}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}}
            />
          </View>
          <View style={[styles.upper]}>
            <View style={styles.leftSide}>
              <ImageViewer
                width='75%'
                height='100%'
                url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> 
            </View>
            <MovieDesc movie={movie} />
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>Overview</Text>
            <Text style={styles.overview}>{movie.overview} {movie.overview}</Text>
          </View>
          <View style={styles.recommendationContainer}>
            <Text style={[styles.title, styles.recommendation]}>Recommendations</Text>
            <MoviesRecommendation movieId={props.route.params.movie.id}/>
          </View>
        </ScrollView>
      )
    }
  }

  return renderDetail()
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  upper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -30
  },
  lower: {
    flex: 1,
    padding: 20
  },
  rightSide: {
    width: '50%',
    padding: 10,
    marginTop: 30
  },
  leftSide: {
    width: '50%',
    paddingLeft: 10,
    paddingVertical: 10
  },
  overview: {
    lineHeight: 22,
  },
  recommendationContainer: {
    
  },
  recommendation: {
    paddingHorizontal: 20
  }
})

export default MovieDetails