import Meteo from "../widget/meteo";
import Dog from "../widget/dog";
import Pokemon from "../widget/pokemon";
import Starwars from "../widget/starwars";
import WidgetTwitch from "../widget/WidgetTwitch"
import Twitch2 from "../widget/Twitch2"

import { useEffect, useState } from "react"

export default function Home() {
    const [twitch, setTwitch] = useState(null)
    
    useEffect(() => {
        setTwitch(JSON.parse(localStorage.getItem("twitch")))
    
    }, [])
    return (
        <div>
        <div className="meteo">
            <Meteo/>
        </div>
        <div className="dog">
        <Dog/>
        </div>
        <div className="pokemon">
            <Pokemon/>
        </div>
        <div className="starwars">
            <Starwars/>
        </div>
        
            <div className="widgetTwitch">
            {twitch === null ?
                <a href='https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=d72l9o7putxq71ktxxku3oqonmw8e6&redirect_uri=http://localhost:3000/getToken&scope=user:read:follows+user:read:subscriptions+user:read:email'>
                    <button> twitch</button>
                </a>
                    :
                    <div>
                    <WidgetTwitch twitch={twitch} />
                    <Twitch2 twitch={twitch}/>
                    </div>
            }
                    
            </div>

        </div>
    )

};
