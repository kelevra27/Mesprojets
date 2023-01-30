import React from 'react';
import { SafeAreaView, TextInput, StyleSheet, Button, FlatList, Text, View, Image } from "react-native";
import { useState } from 'react';


const mySearchBar = ({access_token}) => {
  const [text, onChangeText] = React.useState("");
  const [subreddit, setSubreddit] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [sub, setSub] = React.useState(null);


  // GET THE POST WITH FETCH 

  const getPost = async (event) => {
    event.preventDefault()
    let posts = await fetch(`https://oauth.reddit.com/.json`, {
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
    })
    // console.log(posts.status)
    posts = await posts.json()
    // console.log(posts.data.children)
    setPost(posts.data.children)
  }
  
  // SEARCH SUBREDDIT WITH THE BAR 
  const search = async (event) => {
    console.log("PROUT")
    event.preventDefault()
    let subr = await fetch(`https://oauth.reddit.com/api/search_subreddits?query=${text}`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
    })
    console.log(subr.status)
    subr = await subr.json()
    console.log(subr.subreddits)
    setSubreddit(subr.subreddits)
  }

  // get SUBREDDIT PAGE
  const getSubPage = async (event) => {
    event.preventDefault()
    let subR = await fetch(`https://oauth.reddit.com/r/psg/about`, {
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
    })
    console.log(subR.status)
    subR = await subR.json()
    console.log(subR.data)
    setSub(subR.data)
  }
 
  const newSubreddit = async (event) => {
    console.log("PROUT")
    event.preventDefault()
    let subr = await fetch(`https://oauth.reddit.com/new/.json`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
    })
    console.log(subr.status)
    subr = await subr.json()
    console.log(subr)
    setSubreddit(subr.data.children)
  }

  const HotSubreddit = async (event) => {
    console.log("PROUT")
    event.preventDefault()
    let subr = await fetch(`https://oauth.reddit.com/hot/.json`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
    })
    console.log(subr.status)
    subr = await subr.json()
    console.log(subr)
    setSubreddit(subr.data.children)
  }


  // RENDER THE SUBREDDIT 
  const renderItem = ({ item }) => {
    if (item.data !== undefined) {
      item = item.data
    }
    return (
    <Text onPress={() => alert(item.name)}>
      {item.title} {item.name.includes("t3") ? null : item.name}
    </Text>
    )
  }

  // RENDER THE POST 
  const renderPost = ({ item }) => {
    if (item === undefined || item.data.preview === undefined) {
        return;
      }
      let img = item.data.preview.images[0].source.url
      if (img.includes("preview") === true) {
        img = img.replace("preview", "i")
      }
      return (
        <View style={styles.container}>
          <Text style ={{marginTop: 50}}>
            {item.data.subreddit_name_prefixed}
          </Text>
  
          <Text>
            {item.data.title}
          </Text>
          {img.includes("external") ? null :
            <Image source = {{ uri: img,}} style ={{ width: "80%", height: 400, marginLeft: 20}} />
          }
          <Text>
            Posted by : {item.data.author_fullname}
          </Text>
  
        </View>
      )
    }

    // RENDER SUBREDDIT PAGE 
    const renderPage = ({ item }) => {
      return (
      <View>
      <Text>
        {item.data.title}
      </Text> 

      </View>
      
      )
    }
  
    // COMPONENTS 
  return (
    <SafeAreaView>
      <TextInput
        placeholder='Search for subreddits'
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button type="submit" title="Search" onPress={search}></Button>
      <Button type="submit" title="New" onPress={newSubreddit}></Button>
      <Button type="submit" title="Popular" onPress={HotSubreddit}></Button>
      <Button type="submit" title="Get your subreddits post" onPress={getPost}></Button>
      <Button type="submit" title="Get your subreddits page" onPress={getSubPage}></Button>

      {subreddit === null ? null :
        <FlatList
        data={subreddit}
        renderItem={renderItem}
        keyExtractor={subreddit => subreddit.name}
        />
      }
      {post === null ? null :
        <FlatList
          data={post}
          renderItem={renderPost}
          keyExtractor={post => post.id}
        />
      }
      {sub === null ? null :
        <FlatList
          data={sub}
          renderItem={renderPage}
          keyExtractor={sub => sub.id}
        />
      }
    </SafeAreaView>
  );
};


// CSS 
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default mySearchBar;
