import React, { useState } from "react";
import Button from '@mui/material/Button';

export default function EditRole({ _id, role}) {

    async function updateRole(event, userId) {
        const token = await localStorage.getItem("token")
        event.preventDefault()
        let res = await fetch(`http://localhost:8000/admin/${userId}/editRole`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token,
            },
        });
        if (res.status === 200) {
            window.location.href = "http://localhost:3000/admin/setting"
        }
        else {
            alert("ERROR")
        }
    }
    return (
        <Button variant="outlined" color="error" type="submit" onClick={(e) => updateRole(e, _id)}>{role}</Button>
    )
}


