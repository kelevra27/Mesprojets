/* eslint-disable no-template-curly-in-string */
import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



export default function GameDel({_id}) {


    async function game(event, gameId) {
        event.preventDefault()
        // console.log(name,price,description)
        // let item ={name,price,description};
        let res = await fetch(`http://localhost:8000/games/${gameId}/delete`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            // body: JSON.stringify(item),
        });
        if (res.status === 200) {
            res = await res.text();
            window.location.href = "http://localhost:3000/games/all"
        }
        else {
            alert("ERROR")
        }
    }

    return (
        // <div className="deleteGame">
        //     <h2>ADMIN SECTION - Delete Game</h2>
        //     <form onSubmit={(e) => game(e)}>
        //         <button type="submit">Delete Game</button>
        //     </form>
        // </div>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" type="submit" onClick={(e) => game(e, _id)}>Delete</Button>

    )
}