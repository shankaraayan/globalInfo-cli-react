import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment-timezone';


export default function Time() {
    const [timeZones, setTimeZones] = useState([
        'Asia/Kolkata',
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Sydney',
   
        'America/Chicago',
        'America/Denver',
        'America/Los_Angeles',
        'America/Mexico_City',

        'America/Vancouver',
        'Asia/Baghdad',
        'Asia/Bahrain',
        'Asia/Bangkok',
        'Asia/Colombo',
        'Asia/Dhaka',
        'Asia/Dubai',
        'Asia/Hong_Kong',
        'Asia/Jakarta',
        'Asia/Kabul',
        'Asia/Karachi',
        'Asia/Kathmandu',

        'Asia/Kuwait',
        'Asia/Muscat',
        'Asia/Qatar',
        'Asia/Shanghai',
        'Asia/Singapore',
        'Asia/Tashkent',
        'Asia/Tehran',
        'Atlantic/Bermuda',
        'Atlantic/South_Georgia',
        'Atlantic/Stanley',
        'Australia/Melbourne',
        'Europe/Amsterdam',
        'Europe/Berlin',
        'Europe/Budapest',
        'Europe/Helsinki',
        'Europe/Istanbul',
        'Europe/Jersey',
      ]);

      useEffect(() => {
        // Update the clock every second
        const interval = setInterval(() => {
          setTimeZones((prev) => [...prev]);
        }, 1000);

        return () => clearInterval(interval);
      }, []);
    

  return (
    <>
         <View style={styles.container}>
    <ScrollView>
            <Text style={{fontWeight:700}}>World Clock</Text>

            {timeZones.map((zone) => (
                
                <View key={zone} style={styles.clock}>
                     <Text style={styles.label}>{zone}</Text>
                    <Text style={styles.time}>{moment().tz(zone).format('D-M-Y - h:mm a (Z)')}</Text>
                </View>
             ))}

        </ScrollView>
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
    clock: {
        // alignItems: 'center',
        marginBottom:10,
        borderRadius:10,
        backgroundColor:'#fff',
        padding:10,
   
          
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      time: {
        fontSize: 18,
        fontWeight: 'bold',
      },
});