import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";

class Slider extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {}
  previous() {}
  render() {
    const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Carousel {...props} autoplay effect="fade">
          <div className="imgSlide imgSlide1">
            <img
              src="https://images.unsplash.com/photo-1464306208223-e0b4495a5553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt=""
            />
          </div>
          <div className="imgSlide imgSlide2"></div>
          <div className="imgSlide imgSlide3"></div>
          <div className="imgSlide imgSlide4"></div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
