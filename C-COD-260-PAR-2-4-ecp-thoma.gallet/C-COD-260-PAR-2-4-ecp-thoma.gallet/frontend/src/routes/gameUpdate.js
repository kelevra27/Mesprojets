/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import { Input, Button } from "@mui/material";

export default function GameUp({currentName, currentPrice, currentDescription, gameId, setGameToEdit}) {
    // Editer const 
    const [name, setName] = useState(currentName);
    const [price, setPrice] = useState(currentPrice);
    const [description, setDescription] = useState(currentDescription);

    async function game(event) {
        event.preventDefault()
        console.log(name, price, description)
        let item = { name, price, description };
        let res = await fetch(`http://localhost:8000/games/${gameId}/update`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        });
        if (res.status === 200) {
            res = await res.text();
            console.log(res)
            setGameToEdit(false)

        }
        else {
            alert("ERROR")
        }
    };
    return (
        <div className="updateGame">

            <h2>ADMIN SECTION - Edit Game</h2>
            <form onSubmit={(e) => game(e)}>

                <Input type="name" style={{margin: 20}} onChange={e => setName(e.target.value)} value={name} color="success" placeholder="name" />
                <br />
                <Input type="price" style={{margin: 20}} onChange={e => setPrice(e.target.value)} value={price} color="success" placeholder="price" />
                <br />
                <Input type="description" style={{margin: 20}} onChange={e => setDescription(e.target.value)} value={description} color="success" placeholder="description" />
                <br />
                <Button type="submit" style={{margin: 20}}>Edit Game</Button>

            </form>
        </div>
    )
}
