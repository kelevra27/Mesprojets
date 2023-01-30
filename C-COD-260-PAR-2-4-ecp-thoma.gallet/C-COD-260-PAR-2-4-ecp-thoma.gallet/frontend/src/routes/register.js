// import {Link} from "react-router-dom"; 
// eslint-disable-next-line 
import React, { useState } from "react";    
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Register() {
    let history = useNavigate();
    const[username, setUsername]= React.useState("");
    const[email, setEmail]= React.useState("");
    const[password, setPassword]= React.useState("");

    async function register(event)
    {
        event.preventDefault()
        console.log(username,email,password)
        let item ={username,email,password};
        let res = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item),
        });
        if (res.status === 200) {
            res = await res.json();
            localStorage.setItem("token", res.token)
            localStorage.getItem(JSON.stringify(res))
            // setIsConnected(true)
            history("/");
        }
        else {
            alert("ERROR")
        }
        
    }
return (
<div className="formSignUp">

<h2>Register</h2>
<form onSubmit={(e) => register(e)}>

<input type ="username"  onChange={e => setUsername(e.target.value)} placeholder="username" required/> 
<br/>
<input type ="email"  onChange={e => setEmail(e.target.value)} placeholder="email" required/> 
<br/>
<input type="password"onChange={e => setPassword(e.target.value)} placeholder="password" required/>
<br/>
<Button type="submit">Register</Button>

</form>
</div>
)
}