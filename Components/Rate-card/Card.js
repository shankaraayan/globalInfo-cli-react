import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Card() {


  return (
    
    <View style={{ flexDirection: 'row' ,backgroundColor:'#fff',padding:16,borderRadius:5,marginBottom:10}}>
    <View style={{ width: 50, height: 50 }}>
      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'}}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
      <Text>BTC - INR</Text>
      <Text>New Delhi, India</Text>
      
    </View>
    <View style={{ flexDirection: 'column', flex: 1 }}>
    <Text style={{ fontSize: 22, color: 'green', textAlign: 'right' }}>100</Text>
    </View>
  </View>

  )
}