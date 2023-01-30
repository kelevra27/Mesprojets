import * as React from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartIcon from '@mui/icons-material/AddShoppingCartSharp';

export default function GameCard({ name, picture, description, price, _id, addToCart, removeCart }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ marginBottom: 5, marginLeft: 10, backgroundColor: "#282c34", width:450, height: 300, borderRadius: 10}}>
        <a href={"/" + _id + "/oneGameView"}> 
        <CardMedia
          component="img"
          height="400"
          width="100"
          image={"http://localhost:8000/" + picture}
          alt="Game pic"
          />
          </a>
      </Card>
      <CardContent className='card' >
          <Typography gutterBottom variant="h5" component="div" className='typo' color="white"style={{position: "absolute"}} fontSize="medium">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {description}
          </Typography>
          <Typography variant="h5" color="white" style={{position: "relative", left: 180}} >
            {price} €
          </Typography>
          <CardActions>
          {addToCart === undefined ?
            <Button onClick={(e) => removeCart(e, _id)}>Remove from cart</Button>
            :
            <Button size="small" onClick={(e) => addToCart(e, _id, name, description, price, picture)} variant="outlined" color="success" style={{position: "relative", left: 370}}><CartIcon color="success" fontSize="large" /></Button>
          }
        </CardActions>
        </CardContent>
    </Grid>
  );
}