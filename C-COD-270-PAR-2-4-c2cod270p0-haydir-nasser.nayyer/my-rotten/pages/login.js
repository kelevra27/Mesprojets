import React, { useState } from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Login() {
    const router = useRouter()
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

   async function login(event)
    {
        event.preventDefault()
        console.log(email,password)
        let item ={email,password};
        let res = await fetch("http://localhost:8000/user/login", {
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
            localStorage.setItem("token", res.token)
            localStorage.getItem(JSON.stringify(res))
            localStorage.setItem('email', email)
            await router.push("/")
        }
        else {
            alert("ERROR UNVALID CREDS")
        }   
    }
    
    return(
    <div className="formLogin">
    <h2>Login</h2>
    <form onSubmit={(e) => login(e)}>
    <input type ="email"  onChange={e => setEmail(e.target.value)} placeholder="email" required/> 
    <br/>
    <input type="password"onChange={e => setPassword(e.target.value)} placeholder="password" required/>
    <br/>
    <button type="submit">Login</button>
    <br/>
    <br/>
    <div className="Link">
    <Link href="/register">No account ?</Link>
    </div>
    
    </form>
  </div>
  );
  }


