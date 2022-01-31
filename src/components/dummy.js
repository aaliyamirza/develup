import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Dummy() {
  return (
    <div className='dummy'>
      <Stack direction="row" spacing={10}>
      <Typography varient="h3" sx={{ color: "black", fontSize: "35px"  }}>dummy.</Typography>
        <Typography varient="h3" sx={{ color: "black", fontSize: "35px" }}>dummy.</Typography>
        <Typography varient="h3" sx={{ color: "black", fontSize: "35px" }}>dummy.</Typography>
        <Typography varient="h3" sx={{ color: "black", fontSize: "35px" }}>dummy.</Typography>
        <Typography varient="h3" sx={{ color: "black", fontSize: "35px" }}>dummy.</Typography>
        <Typography varient="h3" sx={{ color: "black", fontSize: "35px" }}>dummy.</Typography>
      </Stack>
    </div>
  );
}
