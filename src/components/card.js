import React from "react";
import Card  from "@mui/material/Card";
import  CardContent  from "@mui/material/CardContent";
import CardMedia  from "@mui/material/CardMedia";
import { Typography } from "@mui/material";

export default function Blog() {
    return(
        <div >
<Card sx={{ maxWidth: 325, marginBottom: 10}} >
<CardMedia
height="350px"
width="320px"
component="img"
image="/"
alt=""
/>
<CardContent >
<Typography gutterBottom variant="h5" component="div">
The Mechatronics Revolution: Fundamentals and Core Concepts
</Typography>
</CardContent>
</Card>
        </div>
    );
}
