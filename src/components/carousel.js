import React, { Component } from "react";
import Slider from "react-slick";
import Blog from "./card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerMode:true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500
    };
    return (
      <div className="carousel">
        <Typography varient="h2" sx={{ color: "black", fontSize: "30px" ,marginTop:"30px", marginBottom:"30px", marginLeft:"30px" }}>Most Popular Courses</Typography>
        <Slider {...settings}>
         
        <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
          <div>
            <Blog/>
          </div>
        </Slider>
      </div>
    );
  }
}
