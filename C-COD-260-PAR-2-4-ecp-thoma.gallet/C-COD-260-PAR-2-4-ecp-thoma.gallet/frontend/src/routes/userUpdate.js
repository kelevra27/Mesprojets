import React , {  useState } from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function UserUpdate() {
    const url = window.location.href;
    console.log(url)
    const userId = url.split('admin/')[1].split('/update')[0]
    console.log(userId)

    // const [users, setUsers] = useState(undefined)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    async function UpdateUser(event) {
        const token = await localStorage.getItem("token")
        event.preventDefault()
        console.log(username,email)
        let item ={username,email};
        let res = await fetch(`http://localhost:8000/admin/${userId}/update`, {
        method: "PUT",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json",
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(item),
        });
        if (res.status === 200) {
            window.location.href = "http://localhost:3000/admin/setting"
            console.log(res)

        }
        else {
            alert("ERROR")
        }

    }




    return (
        <div className="updateuser">

        <h2>ADMIN SECTION - Modifier User</h2>
        <form onSubmit={(e) => UpdateUser(e)}>
        
        <TextField type = "username"  label="username" variant="standard" value={username} color="success" sx={{ input: { color: 'white', borderColor: "white" } }} onChange={e => setUsername(e.target.value)}  required/> 
        <br/>
        <TextField type ="email" label="email" variant="standard" value={username} color="success" sx={{ input: { color: 'white', borderColor: "white" } }} onChange={e => setEmail(e.target.value)}  required/> 
        <br/>
        
        <Button type="submit" variant="contained" color="success" endIcon={<SendIcon />}>Send</Button>
        
        </form>
        </div>
    )
        
    
}