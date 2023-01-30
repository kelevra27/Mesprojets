import { useState } from "react";
function Wars() {
    const [starwars, setStarwars] = useState(null)
    const [nbr, setNbr] = useState('')

    const star = (e) => {
        e.preventDefault()
        fetch("https://swapi.dev/api/people/" + nbr, {
        headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json"
        }
})
    .then((res) => res.json())
    .then((data) => {
        setStarwars(data)
        // console.log(data)
})
}
if (starwars === null) {
    return (
        <form onSubmit={(e) => star(e)}>  
        <h3>Star wars Widget</h3>
            <input type='text' onChange={e => setNbr(e.target.value)} placeholder="Enter a number"/>
            <br/>
            <br/>
            <button type="submit">submit</button>
        </form>
    )
        } else {
            return (
                <div classNbr="starwars"> 
                <h3>Star wars Widget</h3>
                    <form onSubmit={(e) => star(e) }>  
                    <input type='text' onChange={e => setNbr(e.target.value)} placeholder="Enter a number"/>
                    <br/>
                    {starwars.name} <br/>
                    <br/>
                    <button type="submit">Submit</button>
                    </form>
                </div>
            )    
        }
        }
        export default Wars;