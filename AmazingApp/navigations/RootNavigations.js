import React from 'react'
import { View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './HomeStackNavigation'
import Popular from './PopulartackNavigation'

const Tab = createBottomTabNavigator()

export default function RootNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        headerMode="none"
        options={{
          tabBarLabel: 'Now Playing',
          tabBarIcon: () => (
            <View>
              <Image style={{width: 20, height: 20}} source={require('../assets/playing.png')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        headerMode="none"
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: () => (
            <View>
              <Image style={{width: 20, height: 20}} source={require('../assets/popular.png')} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}