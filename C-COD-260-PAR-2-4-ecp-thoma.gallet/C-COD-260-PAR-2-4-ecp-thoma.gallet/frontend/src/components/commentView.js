import React from "react";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import DeleteComment from '../components/deleteComment';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function CommentView({ commentaire }) {


    return (

        <Grid>
            {console.log(commentaire)}
            {commentaire?.map((comment) => (
                <Card variant="outlined" style={{ backgroundColor: "black", marginRight:100, marginTop:10 }} >
                    <hr />
                    <Box style={{ minWidth: 275 }}>
                        <Typography variant="h5" style={{ color: "green" }}>
                            {comment.commentaire}
                            <DeleteComment commentId={comment.id} />
                        </Typography>

                    </Box>
                    <hr />
                </Card>
            ))}
        </Grid>
    )




}