import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <Carousel {...props} effect="fade">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549364742-b940344dbfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549364742-b940344dbfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549364742-b940344dbfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <div className="hero-text">
            <h1>I am Jane Doe</h1>
            <h2 className="hero-subText">And I'm a Photographer</h2>
            <Link to="#">
              <i className="hero-link">Hire me</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549364742-b940344dbfe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
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
