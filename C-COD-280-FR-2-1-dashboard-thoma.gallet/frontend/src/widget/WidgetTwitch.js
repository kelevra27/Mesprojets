import { useEffect, useState } from "react";

function WidgetTwitch(props) {
    const [followedStreams, setFollowedStreams] = useState(null)

    useEffect(() => {
        //code
        getFollows()
        console.log(followedStreams)
    }, [])

    const getFollows = async () => {
        let twitch = props.twitch
        let userId = twitch.user_id
        let reponse = await fetch("https://api.twitch.tv/helix/streams/followed?user_id=" + userId, {
            headers: { 'Content-Type': 'application/json', "Authorization": "Bearer " + props.twitch.access_token, "Client-Id": "d72l9o7putxq71ktxxku3oqonmw8e6" }
        })
        setFollowedStreams(await reponse.json())

    }

    if (followedStreams !== null) {
        return (
            <div>
                {followedStreams.data.map((stream) => (
                    <p> <a href={"https://www.twitch.tv/" + stream.user_login}>{stream.user_login} </a> Joue à : {stream.game_name} devant {stream.viewer_count} viewers  </p>
                ))}
            </div>
        )
    } else {
        return <p>Loading</p>
    }
}

export default WidgetTwitch;