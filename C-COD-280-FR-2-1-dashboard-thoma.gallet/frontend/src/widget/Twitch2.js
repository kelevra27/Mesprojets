import { useEffect, useState } from "react";

function Twitch2 (props) {
    const [topgames, setTopgames] = useState(null)

    useEffect(() => {
        //code
        getTopgames()
        console.log(topgames)
    }, [])

    const getTopgames = async () => {
        // let twitch = props.twitch
        let reponse = await fetch ("https://api.twitch.tv/helix/games/top", {
            headers: { 'Content-Type': 'application/json', "Authorization": "Bearer " + props.twitch.access_token, "Client-Id": "d72l9o7putxq71ktxxku3oqonmw8e6" }
        })
        setTopgames(await reponse.json())

    }

    if (topgames === null) { return <div>Loading .. </div> } else {
        return (
            <div>
                 <p> Most viewed Game : {topgames.data[0].name}</p>
            </div>
        )
    }

}

export default Twitch2;