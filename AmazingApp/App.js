import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import store from './store'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants'
import RootNavigation from './navigations/RootNavigations'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigation />
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});

