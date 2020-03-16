import React, { useEffect } from 'react'
import { View, Button, StyleSheet, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNowPlaying } from '../store/actions/moviesActions'
import MovieDetails from '../screens/MovieDetails'
import Popular from '../screens/Popular'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

function PopularList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNowPlaying())
  }, [])
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Yuhu" 
        component={Popular}
        options={{
          title: 'Mupis',
          headerStyle: {
            backgroundColor: '#60CBC8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStatusBarHeight: 0
        }}
      />
      <Stack.Screen
        name="Movie"
        component={MovieDetails}
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerBackImage: () => (
            <TouchableOpacity>
              <View>
              <Image
                style={{width: 30, height: 30, borderRadius: 15}}
                source={require('../assets/back.png')}
              />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default PopularList