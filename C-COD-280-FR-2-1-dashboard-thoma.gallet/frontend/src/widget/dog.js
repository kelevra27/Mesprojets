import { useState } from "react";

function Dog() {

const [cuteDogImage, setCuteDogImage] = useState('');
const getDog = (e)  => {
    e.preventDefault()
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(res => {
                setCuteDogImage(res.message);
            })
    }
    return (
        <div>
        <div className="app-dogs">
            {cuteDogImage ? <img class="dogImg" width={300} height={200} src={cuteDogImage}
            alt='Cute Dog'/> : <p>Loading Dog api..</p>}
            <div className="btn-dog">
        <button onClick={getDog}>Load new image</button>
        </div>
        </div>
        
    </div>
    )
}

export default Dog;