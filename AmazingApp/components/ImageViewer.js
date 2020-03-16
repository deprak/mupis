import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

function ImageViewer(props) {
  const { url, width, height } = props 
  return (
    <View style={{width: '100%'}}>
      <Image
        style={[styles.image, styles.width={height}, styles.height={height}]}
        source={{uri: url}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    resizeMode: 'contain'
  }
})

export default ImageViewer