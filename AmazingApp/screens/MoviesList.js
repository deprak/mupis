import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StatusBar, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ImageViewer from '../components/ImageViewer'
import MovieCard from '../components/MovieCard'
import { TextInput } from 'react-native-gesture-handler'
import DetailLoader from '../components/DetailLoader'
import { fetchSearch, fetchNowPlaying } from '../store/actions/moviesActions'
import ErrorMessage from '../components/ErrorMessage'
import NoResult from '../components/NoResult'

function MoviesList() {
  const [title, setTitle] = useState('');
  const movies = useSelector(state => state.movies.nowPlaying)
  const isLoading = useSelector(state => state.movies.isLoading)
  const error = useSelector(state => state.movies.error)
  const dispatch = useDispatch()

  function onChangeText(text) {
    setTitle(text)
  }

  useEffect(() => {
    if (title.length === 0) {
      dispatch(fetchNowPlaying())
    } else {
      dispatch(fetchSearch(title))
    }
  }, [title])

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
          <View style={{padding: 10, marginTop: 10}}>
            <TextInput
              style={{ 
                height: 35,
                borderColor: 'gray',
                borderWidth: 1, 
                borderRadius: 10,
                paddingHorizontal: 10
              }}
              onChangeText={onChangeText}
              value={title}
              placeholder='Search movies'
            />
          </View>
          {
            title
              ? <Text style={{padding: 10, fontWeight: 'bold'}}>You are searching for: {title}</Text>
              : <Text style={{padding: 10, fontWeight: 'bold'}}>Now Playing in Indonesia</Text>
          }
          {
            movies.length === 0
            ? <NoResult />
            : (
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
            )
          }
        </>
      )
    }
  }
  return renderer()
}

export default MoviesList