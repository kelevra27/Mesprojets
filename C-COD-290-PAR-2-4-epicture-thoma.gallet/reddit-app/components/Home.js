import { TabActions } from '@react-navigation/routers';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, StyleSheet, View, TouchableHighlight, TouchableOpacity, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';
import SearchBar from '../components/searchBar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ access_token }) {

  return (
    <View style={styles}>
      <Text>Connecté</Text>
      {/* <SearchBar access_token={access_token} /> */}
    </View>
  )

}

// CSS 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
})
