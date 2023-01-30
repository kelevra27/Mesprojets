import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


export default function DelComment({commentId}) {
    const url = window.location.href;
    console.log(url)
    const gameId = url.split('/')[3]
    console.log("GAMEID => ", gameId)

    let history = useNavigate();

    async function deleteComment(event, gameId) {
        const token = await localStorage.getItem("token")
        event.preventDefault()
        let res = await fetch (`http://localhost:8000/games/${gameId}/deletecomment`, {
          method: 'DELETE',
          headers: {
              "Content-type": "application/json",
              "Accept": "application/json",
              'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify({commentId})
      });
      if (res.status === 200) {
        window.location.reload(false); 
        console.log(res)
    }
    else {
        alert("ERROR")
    }
      }









return (
    <Button variant="outlined" startIcon={<DeleteIcon />} color="error" type="submit" onClick={(e) => deleteComment(e, gameId)}>Supprimer</Button>
)

}