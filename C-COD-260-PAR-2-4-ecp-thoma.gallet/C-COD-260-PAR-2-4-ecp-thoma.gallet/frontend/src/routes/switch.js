import React from "react"
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function Switch() {
    return (
        <div className="container-switch">
            <h2>En cours de maintenance</h2>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>

                <LinearProgress color="success" />

            </Stack>
        </div>
    )
};