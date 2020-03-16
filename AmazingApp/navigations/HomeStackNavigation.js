import React, { useEffect } from 'react'
import { View, Button, StyleSheet, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopular } from '../store/actions/moviesActions'
import MoviesList from '../screens/MoviesList'
import MovieDetails from '../screens/MovieDetails'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPopular())
  }, [])
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Yuhu" 
        component={MoviesList}
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
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'red'
  },
  card: {
    borderWidth: 2,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    marginVertical: 10,
    textAlign: 'center'
  }
})

export default Home