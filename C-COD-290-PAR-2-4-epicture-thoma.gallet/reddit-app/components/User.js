import React from 'react';
import { Button, FlatList, SafeAreaView, Text, View, Image } from 'react-native';
import { useState } from 'react';

const userInfo = ({ access_token }) => {
    const [user, setUser] = React.useState(null);

    const info = async (event) => {
        console.log("COUCOU")
        event.preventDefault()
        let use = await fetch('https://oauth.reddit.com/api/v1/me', {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
        })
        console.log(use.status)
        use = await use.json()
        console.log(use.subreddit)
        setUser(use)
    }
    return (
        <SafeAreaView>
            <Button type="submit" title="Mes infos" onPress={info}></Button>
            {user === null ? null :
                <View>

                    <Text>
                    Nom : {user.name} 
                    </Text>
                    <Text>
                    Description : {user.subreddit.public_description}
                    </Text>
                    <Text>
                    Followers : {user.subreddit.subscribers}
                    </Text>
                    <Text>
                    Friends : {user.num_friends}
                    </Text>
                    <Text>
                    Karma : {user.total_karma}
                    </Text>
                    <Image
                    // style={styles.tinyLogo}
                    source={{ 
                     uri: user.snoovatar_img
                    }}
                    style ={{width: "50%", height: "50%"}}
                    />
                </View>
            }
        </SafeAreaView>
    );
};


export default userInfo;