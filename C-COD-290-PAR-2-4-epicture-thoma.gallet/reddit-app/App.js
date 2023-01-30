import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity, Text, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState } from 'react/cjs/react.development';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from './components/searchBar';
import User from './components/User';


export default function App() {
  const [code, setCode] = useState(null)



  const handleWebViewNavigationStateChange = async (newNavState) => {
    const { url } = newNavState;
    if (!url) return

    if (url.includes('code=')) {
      console.log("ON A TROUVE CODE")
      console.log(url)
      webview.stopLoading();
      const code = url.split('&')[1].split("=")[1].split("#")[0];
      console.log(code)

      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append("Authorization", "Basic bUp6dXVfN1NlMU5mVEl4cFRQOEpXQTp5dllIS1VOa2NnZFRJNTBJT2MxWnRkZGVaVlljdWc=");

      const urlencoded = new FormData();
      urlencoded.append("grant_type", "authorization_code");
      urlencoded.append("code", code);
      urlencoded.append("redirect_uri", "http://localhost:3000/getToken");

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };

      let reponse = await fetch("https://www.reddit.com/api/v1/access_token", requestOptions)
      const reddit = await reponse.json();
      console.log(reddit.access_token)
      setCode(reddit.access_token)


    }
  }
  let webview = null
  // if (unauthenticated)
  if (code === null) {
    return (
      <WebView
        ref={(ref) => webview = ref}
        source={{ uri: 'https://www.reddit.com/api/v1/authorize?client_id=mJzuu_7Se1NfTIxpTP8JWA&response_type=code&state=hayder&redirect_uri=http://localhost:3000/getToken&duration=permanent&scope=identity read' }}
        style={{ marginTop: 20 }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    );
  } else {
  const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" >
          <Tab.Screen name="Home"  >

            {(props) => <Home access_token={code} />}
          </Tab.Screen>
          <Tab.Screen name="Search"  >
            {(props) => <SearchBar access_token={code} />}
          </Tab.Screen>
          <Tab.Screen name="Espace Perso"  >
            {(props) => <User access_token={code} />}
          </Tab.Screen>

        </Tab.Navigator>
      </NavigationContainer>

    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ''
  },
})

