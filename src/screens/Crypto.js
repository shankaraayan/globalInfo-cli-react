import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Crypto() {
  return (
    <>
    <View style={styles.container}>
      <Text>Crypto Loading..</Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop: 35,
      marginBottom: 70, 
      height: 700,
      paddingBottom: 20,
    },
})