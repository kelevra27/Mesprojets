import React, { useState, useEffect } from "react";
import GameAdminCard from "../components/gameAdminCard";
import GameDel from "../components/gameDelete";
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import GameUp from "./gameUpdate";


export default function GameAll() {

    const [games, setGames] = useState(undefined);
    const [gameToEdit, setGameToEdit] = useState(false)

    useEffect(() => {
        if (gameToEdit === false) {
            allGame()
        }
    }, [gameToEdit])

    const allGame = async () => {
        // eslint-disable-next-line no-unused-vars
        let res = await fetch("http://localhost:8000/games/all", {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => setGames(data))
    }

    const editGame = (event, game) => {
        event.preventDefault()
        setGameToEdit(game)
    }


    if (games === undefined) {
        return <p>Loading...</p>
    } else if (gameToEdit !== false) {
        return <GameUp currentName={gameToEdit.name} currentPrice={gameToEdit.price} currentDescription={gameToEdit.description} gameId={gameToEdit._id} setGameToEdit={setGameToEdit} />
    } else {
        console.log(games)
        return (
            <div className="container-home"><br /><br /><br />
                <h1>Liste des jeux</h1>

                <Button variant="contained" size="small" color="success" >
                    <li>
                        <a href="/games/create">ADD A NEW GAME</a>
                    </li>
                </Button>
                <br /><br />
                <div className='game-container'>
                    {games.map(game => (
                        <div className="game-item" key={game._id}>

                            {/* <a href={"/games/" + game._id+ "/update"}>Edit Game</a><br/> */}
                            {/* <a href={"/games/" + game._id+ "/delete"}>Delete Game</a><br/> */}
                            <GameAdminCard
                                picture={game.picture}
                                name={game.name}
                                description={game.description}
                                price={game.price}
                            />
                            <Button variant="outlined"> {<CreateIcon />}
                                <li onClick={(event) => editGame(event, game)}>Edit</li>
                            </Button>
                            <GameDel _id={game._id} />
                            <br /><br />
                        </div>
                    ))}
                </div>

            </div>

        );
    }
};






