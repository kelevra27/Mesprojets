import React from "react";
// import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import GameCard from "../components/gameCard";
// import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Cart() {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [games, setGames] = useState([]);
    const [openSnack, setOpenSnack] = useState(false);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart'));
        setGames(items)
    }, []);

    const removeCart = async (e, _id) => {
        e.preventDefault()
        // console.log(game._id)
        let a = JSON.parse(await localStorage.getItem("cart"));
        const found = a.filter(element => element._id !== _id);
        await localStorage.setItem("cart", JSON.stringify(found))
        setGames(found)
        setOpenSnack(true)
    }

    

    if (games.length === 0) {
        return <h1>Empty cart..</h1>
    } else {
        return (
            <div>
                <h1>Your cart</h1>
                <div className='game-container'>
                    <Grid container spacing={1}>
                        {games.map(game => (
                            <GameCard
                                name={game.name}
                                picture={game.picture}
                                description={game.description}
                                price={game.price} 
                                _id={game._id}
                                removeCart={removeCart}
                            />
                        ))}
                    </Grid>
                </div>

                <Snackbar open={openSnack} autoHideDuration={2550} onClose={() => setOpenSnack(false)}>
                    <Alert onClose={() => setOpenSnack(false)} severity="warning" sx={{ width: '100%' }}>
                        Retirer du panier
                    </Alert>
                </Snackbar>
                <div className="paiment">
                    {/* <Button onClick={getPrice}>Get THE PRICE IN CONSOLE</Button> */}
                    <Button><a href="/pay" style={{ textDecoration: 'none', color: 'red' }}><p>Continue</p></a></Button>

                </div>
            </div>

        )
    }
}