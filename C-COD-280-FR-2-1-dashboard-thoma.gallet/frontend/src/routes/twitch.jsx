import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Twitch() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const getAccessToken = async () => {
        const code = searchParams.get("code")
        let reponse = await fetch("http://localhost:8002/getToken", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                code : code
            })

        })
        
        const twitch = await reponse.json();
        reponse = await fetch("https://api.twitch.tv/helix/users", {
            headers: {'Content-Type': 'application/json', "Authorization": "Bearer " + twitch.access_token, "Client-Id" : "d72l9o7putxq71ktxxku3oqonmw8e6"},

        })
        const user = await reponse.json()
        // console.log(user)
        // await localStorage.setItem("twitch", JSON.stringify(twitch))
        await localStorage.setItem("twitch", JSON.stringify({...twitch, user_id: user.data[0].id}))
        navigate("/")

        // console.log(twitch)
        
    }

    useEffect(() => {
        //code
       getAccessToken()
    
    }, [])

  return <div className="getToken">{searchParams.code}

  </div>
    
};