import React from 'react'
import { Text, Image, View } from 'react-native'

function NoResult() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '50%', height: '50%', alignItems: 'center', alignContent: 'center'}}>
        <Image 
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
          source={require('../assets/empty.png')}
        />
        <Text style={{color: '#60CBC8', fontSize: 20}}>No Result</Text>
      </View>
    </View>
  )
}

export default NoResult