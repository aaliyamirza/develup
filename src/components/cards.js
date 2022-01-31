import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Cards() {
  
    return (
        <div className="cards">
        <Card className="card" sx={{ width: 250, backgroundColor: "#6b6b6b", color: "#fff"}}>
      <CardContent>
      <Typography variant="h5">28739</Typography>
            <Typography sx={{ fontSize: 14 }}>Number of courses offered</Typography>
      </CardContent>
      </Card>
            
        
          <Card className="card" sx={{ width: 250, backgroundColor: "#6b6b6b", color: "#fff" }}>
      <CardContent>
      <Typography variant="h5" >158</Typography>
      <Typography sx={{ fontSize: 14 }}>Number of training sessions conducted</Typography>
      </CardContent>
         </Card>
            
         
          <Card  className="card" sx={{ width: 250, backgroundColor: "#6b6b6b", color: "#fff" }}>
      <CardContent>
      <Typography variant="h5" >185</Typography>
     <Typography sx={{ fontSize: 14 }}>Number of jobs available</Typography>
      </CardContent>
         </Card>
            
          
          <Card className="card" sx={{ width: 250, backgroundColor: "#6b6b6b", color: "#fff" }}>
      <CardContent>
      <Typography variant="h5">158</Typography>
      <Typography sx={{ fontSize: 14 }} >Number of career support</Typography>
      </CardContent>
      </Card>
          
            
        
          <Card className="card" sx={{ width: 250, backgroundColor: "#6b6b6b", color: "#fff" }}>
      <CardContent>
      <Typography variant="h5">2.5L</Typography>
            <Typography sx={{ fontSize: 14 }} >Number of candidates enrolled till date</Typography>
      </CardContent>
         </Card> 
           
          
        
      </div>
    );
  }
