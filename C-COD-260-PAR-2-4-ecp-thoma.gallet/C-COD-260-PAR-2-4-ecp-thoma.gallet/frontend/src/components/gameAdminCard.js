import * as React from 'react';
import Card from '@mui/material/Card';
// import GameDel from "../components/gameDelete";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function GameCard({name, picture, description, price}) {
    return (
      <Card sx={{ width: 300}}>
        <CardMedia
          component="img"
          height="300"
          image={"http://localhost:8000/" + picture}
          alt="Game pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {price} €
          </Typography>    
        </CardContent>
      </Card>
    );
  }

  