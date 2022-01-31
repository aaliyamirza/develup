import { IconButton } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FormControl } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Link } from "@mui/material";
function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="end" >
    <div className="update">
    <div className="mail" >
    <h2>Sign up and stay updated on your career</h2>
    <FormControl size="small" sx={{ backgroundColor:"white", width: 300}} focused>
  <OutlinedInput placeholder="Email" />
  </FormControl>
    </div>

    <div className="social">
    <h2>Stay connected on social</h2>
    <IconButton sx={{color:"white"}}> <InstagramIcon/> </IconButton>
    <IconButton sx={{color:"white"}}> <YouTubeIcon/> </IconButton>
    <IconButton sx={{color:"white"}}> <LinkedInIcon/> </IconButton>
    <IconButton sx={{color:"white"}} > <FacebookIcon/> </IconButton>
    <IconButton sx={{color:"white"}}> <TwitterIcon/>  </IconButton>
    </div>
    </div>

    <div className="links">
    <div className="courses">
   <h2>POPULAR COURSES</h2>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link> 
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none" >Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
   </div>

   <div className="career">
   <h2>TOP CAREERS</h2>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link> 
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none" >Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none" >Lorem Ipsum</Link>
   </div>

   <div className="companies">
   <h2>TOP COMPANIES</h2>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link> 
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none">Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none" >Lorem Ipsum</Link>
     <Link to="/" color="inherit" underline="none" >Lorem Ipsum</Link>
   </div>

   <div className="develup">
   <h2>DEVELUP</h2>
     <Link to="/" color="inherit" underline="none">About us</Link> 
     <Link to="/" color="inherit" underline="none" >Contact us</Link>
     <Link to="/" color="inherit" underline="none">Blog</Link>
     <Link to="/" color="inherit" underline="none">Terms And Conditions</Link>
     <Link to="/" color="inherit" underline="none">Privacy Policy</Link>
   </div>
   </div>

    <div className="details">
        <h2>CONTACT US</h2>
        <p>21/23 MG Road,Sampangi Ramnagar,Bangalore, Karnataka 560001</p>
        <p>Mobile: +91 98000 98000</p>
        <p>Whats App: +91 98000 98000</p>
        <p>Email: hello@develup.in</p>
    </div>

    <div className="copyright">
        <p>© Develup education pvt ltd 2021 CIN: L01631KA2010PTC096843</p>
    </div>

    <div className="copyright"> 
    <p>Copyright ⓒ Aaliya Mirza {currentYear}</p>
    </div>
    
    </footer>
}

export default Footer