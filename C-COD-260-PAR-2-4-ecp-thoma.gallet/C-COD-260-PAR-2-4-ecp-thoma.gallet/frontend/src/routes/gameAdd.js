import React, { useState } from "react";
import { Button } from "@mui/material";
import { Input } from '@mui/material';

import axios from "axios";

export default function Game() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    // console.log(image, 12)

    async function game(event) {
        event.preventDefault()
        console.log(name, price, description)

        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)

        // const formData = new FormData()
        axios.post("http://localhost:8000/games/create", formData).then(result => {
            console.log(result.data)
            alert('success')
        }).catch(error => {
            alert('service error')
            console.log(error)
        })
    }
    // images 
    const handleChange = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    const handleApi = () => {
        //call the api
        const url = 'http://localhost:8000/api/image'
        const formData = new FormData()
        formData.append('image', image)
        axios.post(url, formData).then(result => {
            console.log(result.data)
            alert('success')
        })
            .catch(error => {
                alert('service error')
                console.log(error)
            })
    }
    return (
        <div className="addGame">

            <h2>ADMIN SECTION - Add Game</h2>
            <form onSubmit={(e) => game(e)} >

                <Input type="name" onChange={e => setName(e.target.value)} placeholder="name" color="success" required style={{margin: 20}}/>
                <br />
                <Input type="price" onChange={e => setPrice(e.target.value)} placeholder="price" color="success"required style={{margin: 20}}/>
                <br />
                <Input type="description" onChange={e => setDescription(e.target.value)} color="success"placeholder="description" required style={{margin: 20}}/>
                <br />
                <Input type="file" onChange={handleChange} style={{margin: 20}}/> <br />
                {/* <button onClick={handleApi} >SUBMIT IMAGE FIRST</button> */}
                <Button type="submit" color="success" style={{margin: 20}}>Add Game</Button >

            </form>
        </div>
    )
}