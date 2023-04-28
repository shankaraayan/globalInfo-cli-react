import React, { useEffect, useState } from 'react';
import { Location, Permissions } from 'expo-location';


const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);

export default function Test() {
useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      // Now that we have the permission, call the getCurrentPositionAsync method to get the user's current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text>{errorMsg}</Text>
      )}
    </View>
  );
}