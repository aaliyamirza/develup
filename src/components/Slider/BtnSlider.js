import React from "react";
import "./Slider.css";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <IconButton 
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    {direction === "next" ? <ArrowForwardIcon sx={{color: "black" }}/>   :   <ArrowBackIcon  sx={{color: "black" }}/> } 
    </IconButton>
  );
}