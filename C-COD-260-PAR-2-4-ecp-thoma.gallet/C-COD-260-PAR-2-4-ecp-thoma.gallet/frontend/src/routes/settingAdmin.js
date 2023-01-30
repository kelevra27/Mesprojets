import React from "react";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserDelete from "../components/userDelete";
import EditRole from "../components/editRole";
import { Button } from "@mui/material";


export default function Adminsettings() {
    const [users, setUsers] = useState(undefined)
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');

    useEffect(() => {
        Getuser()
        // Editprofil()
    }, [])

    const url = window.location.href;
    console.log(url)
    const userId = url.split('admin/')[1].split('/update')[0]
    console.log(userId)

    async function Getuser() {
        const token = await localStorage.getItem("token")
        await fetch("http://localhost:8000/admin/", {
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
                // setUsername(data.username)
                // setEmail(data.email)
            })
        console.log(users)
    }

    if (users === undefined) {
        return <CircularProgress />
    }
    return (
        <div className='game-container'>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}>username</TableCell>
                        <TableCell sx={{ color: 'white' }}>email</TableCell>
                        <TableCell sx={{ color: 'white' }}>role</TableCell>
                        <TableCell sx={{ color: 'white' }}>EDIT</TableCell>
                        <TableCell sx={{ color: 'white' }}>DELETE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.name} >
                            <TableCell component="td" scope="row" sx={{ color: '#5CDC0D' }}>
                                <h5>{user.username}</h5>
                            </TableCell>
                            <TableCell component="td" scope="row" sx={{ color: '#5CDC0D' }}>
                                <p>{user.email}</p>
                            </TableCell>
                            <TableCell component="td" scope="row" sx={{ color: '#5CDC0D' }}>
                                <EditRole _id={user._id} role={user.role}/> 
                            </TableCell>
                            <TableCell component="td" scope="row" sx={{ color: '#5CDC0D' }}>
                                <Button variant="contained" color="success">
                            <a href={"/admin/" + user._id + "/update"} sx={{ color: '#5CDC0D' }} style={{textDecoration: 'none'}}> Modifier les infos </a><br />
                                </Button>
                            </TableCell>
                            <TableCell component="td" scope="row" sx={{ color: '#5CDC0D' }}>
                                <UserDelete _id={user._id}/>
                            </TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>)

}