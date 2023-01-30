import { useState } from "react";


function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [name, setName] = useState('')

    const pok = (e) => {
        e.preventDefault()
        fetch("https://pokeapi.co/api/v2/pokemon/" + name, {
        headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"
        }
})
    .then((res) => res.json())
    .then((data) => {
        setPokemon(data)
        // console.log(data)
})

}

if (pokemon === null) {
    return (
        <form onSubmit={(e) => pok(e)}>  
        <h3>Pokeapi Widget</h3>
            <input type='text' onChange={e => setName(e.target.value)} placeholder="Enter a number"/>
            <br/>
            <br/>
            <button type="submit">submit</button>
        </form>
    )
        } else {
            return (
                <div classNbr="pokemon"> 
                <h3>Pokeapi Widget</h3>
                    <form onSubmit={(e) => pok(e) }>  
                    <input type='text' onChange={e => setName(e.target.value)} placeholder="Enter a number"/>
                    <br/>
                    {pokemon.name} <br/>
                    <br/>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            )    
        }
        }
        export default Pokemon;