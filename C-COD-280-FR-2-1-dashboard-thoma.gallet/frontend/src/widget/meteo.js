import { useState } from "react";

function Meteo() {
    const [location, setLocation] = useState("");
    const [meteo, setMeteo] = useState(null);

    const getMeteo = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8001?city=${location}`, {
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            }
        }).then((res) => res.text())
            .then((data) => {
                setMeteo(data)
            })
    }


    if (meteo === null) {
        return (
            <form onSubmit={(e) => getMeteo(e)}>
                <h3>Forecast Widget</h3>
                <input type="text" onChange={e => setLocation(e.target.value)} placeholder="Enter a location" />
                <br/>
                <button type="submit">Yo</button>
            </form>
        )
    } else {
        return (
            <div>
                <div className="app-meteo">
                <h3>Forecast Widget</h3>
                {meteo}
                <form onSubmit={(e) => getMeteo(e)}>
                <input type="text" onChange={e => setLocation(e.target.value)} placeholder="Enter a location" />
                <br/>
                <button type="submit">Yo</button>
            </form>
                </div>
            </div>
        )
    }
}

export default Meteo;
