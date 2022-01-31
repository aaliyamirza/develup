import React, { Component } from "react";
import Slider from "react-slick";
import Blog from "./card";

export default class Carousal extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div >
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
         <div className="carousel"> 
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
          </div> 
        </Slider>
      </div>
    );
  }
}