import React from "react"
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function SettingsUser() {
    
    const [users, setUsers] = useState(undefined)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnack, setOpenSnack] = useState(false);


    useEffect(() => {
        Getprofil()
        // Editprofil()
    }, [])

 
    async function Deleteprofil() {
        const token = await localStorage.getItem("token")
        await fetch("http://localhost:8000/user/users", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
        })
        .then((res) => {window.location.href = "http://localhost:3000/home"})
    }


    async function Editprofil(props) {
        const token = await localStorage.getItem("token")
        let item ={username, email,password};
        if (password === "") {    
            item = { username, email };
        }
        await fetch("http://localhost:8000/user/users", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(item),
        })
            .then(res => res.text())
            .then((res) => setOpenSnack(true))
    }

    async function Getprofil() {
        const token = await localStorage.getItem("token")

        console.log(token)
        await fetch("http://localhost:8000/user/users", {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
                setUsername(data.username)
                setEmail(data.email)
            })
        console.log(users)
    }
        

    if (users === undefined) {
        return <CircularProgress />
    } else {
        return (
            <div className="container-settings">
                <h1>User info </h1>
                <div className='user-container'>
                    <div className="user-item">
                        <TextField id="standard-basic" label="username" variant="standard" value={username} color="success" sx={{ input: { color: 'white', borderColor: "white" } }} onChange={(e) => setUsername(e.target.value)} />
                        <TextField id="standard-basic" label="email" variant="standard" color="success" sx={{ input: { color: 'white', borderColor: "white" } }} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField id="standard-basic" label="password" variant="standard" value={password} color="success" sx={{ input: { color: 'white', borderColor: "white" } }} onChange={(e) => setPassword(e.target.value)} />

                        {/* <h5>{users.username}</h5>
                  <p>{users.email}</p>
                  <p>{users.password}</p> */}
                    </div>
                    <Snackbar open={openSnack} autoHideDuration={6000} onClose={() => setOpenSnack(false)}>
                        <Alert onClose={() => setOpenSnack(false)} severity="success" sx={{ width: '100%' }}>
                            Compte mis à jour
                        </Alert>
                    </Snackbar>

                    <Button onClick={() => Editprofil(users.token)} variant="outlined" endIcon={<SendIcon />}>send </Button>
                    <Button onClick={() => Deleteprofil(users.token)} variant="outlined" endIcon={<DeleteIcon />}>delete </Button>
        
      
                </div>
            </div>
        )
    }


}