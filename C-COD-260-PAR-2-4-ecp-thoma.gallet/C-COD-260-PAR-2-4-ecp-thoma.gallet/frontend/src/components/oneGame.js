import React, { useState } from "react";

import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import CommentView from "./commentView";

export default function CommentAdd({ name, picture, description, price, _id, addToCart, commentaire }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const [comment, setComment] = useState([]);

  const url = window.location.href;
  console.log(url)
  const gameId = url.split('/')[3]
  console.log("GAMEID => ", gameId)


  async function addComment(event) {
        const token = await localStorage.getItem("token")
        event.preventDefault()
    let res = await fetch(`http://localhost:8000/games/${gameId}/addcomment`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json",
      'Authorization': 'Bearer ' + token,
  },
    body: JSON.stringify({comment})
    });
    if (res.status === 200) {
      res = await res.text();
      console.log("Commentaire ajouté")
      
      commentaire.push({commentaire: comment})
      setComment("")
      console.log(addComment)
      setOpen(false)  
    }

  }






  return (
    <Grid container spacing={2} >


      <Grid item xs={12} sm={12} md={6}>
        <Card style={{backgroundColor:"black", width:600, marginLeft: "5vw", marginTop: -150 }}>

          <CardMedia
            component="img"
            width="1000000"
            height="300"
            image={"http://localhost:8000/" + picture}
            alt="Game pic"
          />

          <CardContent style={{color:"green"}}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" style={{color:"green"}}>
              {description}
            </Typography>
            <Typography variant="h5" style={{color:"green"}}>
              {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={{display:"flex", right:-420, width:150, height:50}} size="large" variant="contained" color="success"  onClick={(e) => addToCart(e, _id, name, description, price, commentaire)}>addToCart</Button>
            <Button style={{display:"flex", left:-150,  width:150, height:50}} variant="contained" color="info" size="large" onClick={handleOpen}>addComment</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
             

            >
              <Box sx={style} style={{backgroundColor:"#424242"}}>
                <h3>Ajouter un commentaire</h3>
                <TextField  type="text" name="comment" color="success"  value={comment} style={{width:300, }} onChange={(event) => setComment(event.target.value)}/>
                <Button style={{display:"flex", right:-350, bottom:-25}} variant="contained" color="success" onClick={(event) => addComment(event)}>Send</Button>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <CommentView commentaire={commentaire} />
      </Grid>
    </Grid>

  )
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};