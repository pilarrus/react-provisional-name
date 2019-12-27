import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <Carousel autoplay effect="fade" dots>
        <div className="imgSlide">
          <h3>HOl</h3>
        </div>
        <div className="imgSlide">
          <h3>asf</h3>
        </div>
        <div className="imgSlide">
          <h3>jhg</h3>
        </div>
        <div className="imgSlide">
          <h3>jkh</h3>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
