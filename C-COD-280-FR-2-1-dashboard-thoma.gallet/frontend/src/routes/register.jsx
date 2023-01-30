import {Link} from "react-router-dom"; 
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    let history = useNavigate();
    const[username, setUsername]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

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
            console.log(res)
            localStorage.getItem(JSON.stringify(res))
            history("/widget");   
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
<button type="submit">Register</button>

</form>
</div>
)
}