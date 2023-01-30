import { Grid } from "@mui/material";
import React from "react"
import { useState, useEffect } from "react";
// import { Button } from "@mui/material";
import GameCard from "../components/gameCard";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SearchAppBar from "../components/searchBar";


export default function Home() {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [games, setGames] = useState([]);
    const [openSnack, setOpenSnack] = useState(false);

    useEffect(() => {
        getGames()
    }, [])

    const getGames = async () => {
        // e.preventDefault()
        if (await localStorage.getItem("cart") === null) {
            await localStorage.setItem("cart", JSON.stringify([]))
        }
        await fetch("http://localhost:8000/games/all", {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => setGames(data))
    }

    // ajouter au panier 
    const addToCart = async (e, _id, name, description, price, picture) => {
        e.preventDefault()
        let a = JSON.parse(await localStorage.getItem("cart"));
        a.push( {_id, name, description, price, picture} )
        await localStorage.setItem("cart", JSON.stringify(a));
        setOpenSnack(true)
    }

    if (games === undefined) {
        return <p>Loading</p>
    } else {
        return (
            <>
            <div className="BEST">
            <img src="./img/fifa23BIG.jpeg" alt="big" style={{width: 1200, heigth: 100}}></img>
            <p></p>
            </div>
            <div className="container-home">
                <h3 style={{display: "flex"}}>Jeux du moment</h3>
                <SearchAppBar />
                <Grid container spacing={2}>
                    {games.map(game => (
                        <GameCard
                            name={game.name}
                            picture={game.picture}
                            // description={game.description}
                            price={game.price}
                            _id={game._id}
                            addToCart={addToCart}
                        />
                    ))}
                </Grid>

                <Snackbar open={openSnack} autoHideDuration={850} onClose={() => setOpenSnack(false)}>
                    <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
                        Ajouter au panier
                    </Alert>
                </Snackbar>
            </div>
            </>
        );
    }
};
