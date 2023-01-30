import { Grid } from "@mui/material";
import React from "react"
import { useState, useEffect } from "react";
import OneGame from '../components/oneGame';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AddComment() {
    useEffect(() => {
        getGame()
        // Editprofil()
        // eslint-disable-next-line
    }, [])

    const [game, setGame] = useState([]);
    const [openSnack, setOpenSnack] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const url = window.location.href;
    console.log(url)
    const gameId = url.split('/')[3]
    console.log("GAMEID => ", gameId)

    async function getGame() {
        const token = await localStorage.getItem("token")
        await fetch(`http://localhost:8000/games/${gameId}`, {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
        })
            .then((res) => {
                console.log(res.status)
                return res.json()
            })
            .then(data => {
                console.log(data)
                setGame(data)
                // setUsername(data.username)
                // setEmail(data.email)
            })
    }



    const addToCart = async (e, _id, name, description, price) => {
        e.preventDefault()
        let a = JSON.parse(await localStorage.getItem("cart"));
        a.push({ _id, name, description, price })
        await localStorage.setItem("cart", JSON.stringify(a));
        setOpenSnack(true)
    }

    return (

        <div className="container-home">
            
            {/* {games.map(game => ( */}
            <OneGame
                name={game.name}
                picture={game.picture}
                description={game.description}
                price={game.price}
                _id={game._id}
                commentaire={game.commentaire}
                addToCart={addToCart}
            />
            {/* ))} */}
            <Snackbar open={openSnack} autoHideDuration={850} onClose={() => setOpenSnack(false)}>
                <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
                    Ajouter au panier
                </Alert>
            </Snackbar>

        </div>

    )
}
