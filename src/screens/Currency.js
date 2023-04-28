import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

const API_KEY = '40b29e1abe9d4d8195ed2dfc3fdcce46';
const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;


export default function Currency() {
    const [rates, setRates] = useState(null);
    useEffect(() => {
        fetch(BASE_URL)
          .then((response) => response.json())
          .then((data) => setRates(data.rates))
          .catch((error) => console.error(error));
      }, []);

      if (!rates) {
        return (
            <View style={styles.container}>
            <Text>Loading...</Text>
          </View>
        );
      }

    return (
        <>
        <View style={styles.container}>
            <ScrollView>
            <Text style={{fontWeight:700}}>Curreny</Text>
            <Text style={styles.currency}>1 USD to Indian: {rates.INR}</Text>
            <Text style={styles.currency}>1 USD to Bitcoin: {rates.BTC}</Text>
            <Text style={styles.currency}>1 USD to Euro: {rates.EUR}</Text>
            <Text style={styles.currency}>1 USD to United Arab Emirates Dirham: {rates.AED}</Text>
            <Text style={styles.currency}>1 USD to British Pound Sterling: {rates.GBP}</Text>
            <Text style={styles.currency}>1 USD to Pakistani Rupee : {rates.PKR}</Text>
            <Text style={styles.currency}>1 USD to Afghan : {rates.AFN}</Text>
            <Text style={styles.currency}>1 USD to Chinese Yuan : {rates.CNY}</Text>
            <Text style={styles.currency}>1 USD to South African Rand : {rates.ZAR}</Text>
            <Text style={styles.currency}>1 USD to Ukrainian Hryvnia : {rates.UAH}</Text>
            <Text style={styles.currency}>1 USD to Russian Ruble : {rates.RUB}</Text>
            <Text style={styles.currency}>1 USD to Omani Rial : {rates.OMR}</Text>
            <Text style={styles.currency}>1 USD to Nigerian Naira : {rates.NGN}</Text>
            <Text style={styles.currency}>1 USD to Kuwaiti Dinar : {rates.KWD}</Text>
            <Text style={styles.currency}>1 USD to Japanese Yen : {rates.JPY}</Text>
            <Text style={styles.currency}>1 USD to Indonesian Rupiah : {rates.IDR}</Text>
            <Text style={styles.currency}>1 USD to Australian Dollar : {rates.AUD}</Text>
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
    currency:{
        backgroundColor:'#fff',
        padding:10,
        marginBottom:10,
        borderRadius:10,
    }
});