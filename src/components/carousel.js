import React, { Component } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";

import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Blog from "./card.js";
import "slick-carousel/slick/slick.css"

const image = [1, 2, 3, 4];
export default class Carousel extends Component{
  render() {
    const settings = {
      
      infinite: false,
      centerPadding: "20px",
      slidesToShow: 4,
      swipeToSlide: true,
      display: "flex",
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
     
    return (
      <div >
        <Typography varient="h2" sx={{ color: "black", fontSize: "30px" ,marginTop:"30px", marginLeft:"30px" }}>Most Popular Courses</Typography>
        <Slider {...settings}>
        <Box sx={{ flexGrow:1, gridAutoColumns: '4', gridAutoFlow: 'row'}}>
         <Grid container spacing={2} row={1} columns={4} marginLeft={10} marginTop={5} marginBottom={5} >
        
        {image.map(function(){
            return (   
         <Blog />
            )
        })}
        
        </Grid>
        </Box>
        
        </Slider>
      </div>
    );
  }
}