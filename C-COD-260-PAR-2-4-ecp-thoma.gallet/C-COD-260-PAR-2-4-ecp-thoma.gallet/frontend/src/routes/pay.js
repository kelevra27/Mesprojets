import React, { useEffect, useState } from "react";
import StripeContainer from "../stripe/StripeContainer";

export default function Pay() {

    const [prices, setPrices] = useState(undefined);
    const [games, setGames] = useState(undefined);


    useEffect(() => {
        const a = JSON.parse(localStorage.getItem("cart"));
        const result = a.reduce(function (acc, obj) { return acc + obj.price; }, 0);
        console.log(result)
        setPrices(result)
        setGames(a)
    }, []);

    if (prices === undefined && games === undefined) {
        return (
            <div>
                <p>Votre panier est vide veuillez ajouter un jeu pour procéder au payement</p>
            </div>
        )
    }
    return (
        <>
            <div>
                <h1>Page des paiements</h1>
                <div>
                {games.map(game => (
                    <div key={game.id}>
                        <p>{game.name} - {game.price} € </p>
                    </div>
                ))}

            </div>
                
                <StripeContainer />
                <p>Prix total : {prices}</p>
            </div>

            
        </>
    )
}