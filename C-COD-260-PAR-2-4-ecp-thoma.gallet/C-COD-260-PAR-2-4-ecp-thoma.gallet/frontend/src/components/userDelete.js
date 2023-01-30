import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


export default function UserDelete({ _id }) {
    

    async function DeleteUser(event, userId) {
        const token = await localStorage.getItem("token")
        event.preventDefault()
        let res = await fetch(`http://localhost:8000/admin/${userId}/delete`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
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
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" type="submit" onClick={(e) => DeleteUser(e, _id)}>Supprimer</Button>
    )
}