import React from "react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Admin() {
    const history = useNavigate();

    const [isCheck, setIsCheck] = useState(false);

    useEffect(() =>  {
        checkGrants()
    }, [])


    const checkGrants = async () => {
        const token = localStorage.getItem("token")
        // fetch( POST /isAdmin token body => true / false)
        const res = await fetch("http://localhost:8000/user/isAdmin", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({token}),
        });
        console.log(res)
        if (res.status === 200) {
            console.log("Ok ")
            setIsCheck(true)
            //  router.push("/admin");
        } else {
            // alert("Error you're not allowed")
            
            setTimeout(() => {
                history("/");
              }, "1000")
        }
    }

    if(isCheck === false){
        return <CircularProgress color="success"/>
    }
    return (
        <div className="container-admin">
            <h1>ADMIN SECTION </h1>
            <Stack direction="row" spacing={2}>
            
            <Button variant="outlined" size="large">
            <li> 
                <a href="/games/all">GAMES</a> 
            </li>
            </Button>   

            <Button variant="outlined" size="large">
            <li>
                 <a href="/admin/setting">USERS</a>
            </li>
            </Button>
            
            </Stack>
        </div>
    )

};
