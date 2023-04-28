import React from 'react'
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeCard from '../../Components/Card/HomeCard';
import { useNavigation } from '@react-navigation/core'

export default function Home() {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    const handlePress = async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
  
    const [address, setAddress] = useState(null);
    useEffect(() => {
      (async () => {
        if (location) { 
          let geocode = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
          // console.log(geocode);
          setAddress(geocode);
        }
      })();
    }, [location]);
  
    const [time, setTime] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          const options = { 
            timeZone: 'Asia/Kolkata', 
            hour12: false, 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric' 
          };
          const timeString = new Intl.DateTimeFormat([], options).format(date);
          setTime(timeString);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

  return (
    <View>
      <ScrollView style={styles.page}>
            <View style={styles.container}>
              <View style={styles.locationBox}>
                  <Image style={styles.locationMap} 
                  source={{ uri: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png" }} />
                  <Text style={styles.location}>
                  {address && (
                    <Text>
                      {address[0].city}, {address[0].country}
                    </Text>
                    )}
                  </Text>
                    <Text style={{fontWeight:700}}> Time: {time}</Text>
              </View>
            
              <View style={styles.row}>

                    <HomeCard
                    title="Crypto"
                    image="https://assets.stickpng.com/images/5a521fa72f93c7a8d5137fcf.png"
                    icon="https://picsum.photos/200"
                    />

                    <HomeCard title="Currency"
                    image="https://cdn-icons-png.flaticon.com/512/2769/2769441.png"
                    icon="https://picsum.photos/200"
                    >
                        
                    </HomeCard>
                
                </View>
                <View style={styles.row}>
                   
                        <HomeCard title="Time" 
                        image="https://icon-library.com/images/clock-png-icon/clock-png-icon-0.jpg"
                        icon="https://picsum.photos/200"
                        >
                        </HomeCard>
                   
                </View>                
              
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {address && `${address[0].name}, ${address[0].district}, ${address[0].city}, ${address[0].country}`}
              </Text>
            </View>

            <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
              <Image
                source={{
                  uri:
                    'https://icons-for-free.com/download-icon-bx+current+location-1325051865916848437_512.png',
                }}
                style={{ width: 25, height: 20 }}
              />
            </TouchableOpacity>
          </ScrollView>
    </View>
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
    location:{
      fontSize:16,
      marginBottom:35
    },
    locationMap:{
      width:30,
      height:30,
    },
    locationBox:{
      flexDirection: 'row',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
  
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
    footerText: {
      textAlign: 'center',
    },
    floatingButton: {
      position: 'absolute',
      bottom: 0,
      right: 20,
      backgroundColor: '#fff',
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom:10,
    },
  });