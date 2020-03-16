import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const { getEmojiFlag,  languages} = require('countries-list')
const countries = require('i18n-iso-countries')
const ISO6391 = require('iso-639-1')

function MovieDesc({ movie }) {
  
  useEffect(() => {
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"))
  }, [])

  function countryName(movie) {
    if (movie.production_countries && movie.production_countries[0]) {
      return movie.production_countries[0].iso_3166_1
    }
  }

  return (
    <View style={styles.desc}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold'
        }}>
        {movie.original_title}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 15, height: 15, marginRight: 2}}
          source={require('../assets/clock.png')} 
        />
        <Text style={{ fontSize: 10, color: '#787878'}}>{movie.runtime} min</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{width: 15, height: 15, marginRight: 2}}
          source={require('../assets/star.png')} 
        />
        <Text style={{fontSize: 10}}>{movie.vote_average}</Text>
      </View>
      <Text>Status</Text>
      <Text>{movie.status}</Text>
      <Text>Release Information</Text>
      <Text>{getEmojiFlag(countryName(movie))} {movie.release_date}</Text>
      <Text>Original Language</Text>
      <Text>{ISO6391.getName(movie.original_language)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  desc: {
    width: '50%',
    padding: 10,
    marginTop: 30
  }
})

export default MovieDesc