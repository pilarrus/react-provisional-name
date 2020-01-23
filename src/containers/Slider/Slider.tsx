import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import forest from "../../images/slider/forest.jpg";
import freezer from "../../images/slider/freezer.jpg";
import sheet from "../../images/slider/sheet.jpg";

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
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Carousel {...props} autoplay effect="fade">
        <div className="hero-image">
          <img src={forest} alt="forest" />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={sheet} alt="sheet" />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={freezer} alt="" />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={sheet} alt="" />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
