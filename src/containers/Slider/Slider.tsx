import { Carousel } from "antd";
import "antd/dist/antd.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import forest from "../../images/slider/forest.jpg";
import group from "../../images/slider/group.jpeg";
import people from "../../images/slider/people.jpg";

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
          <img src={forest} alt="forest" className="img-slider"/>
          <div className="hero-text">
            <h1>Visita</h1>
            <h2 className="hero-subText">nuestras aventuras</h2>
            <Link to="/adventures">
              <i className="hero-link">Click aquí</i>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={group} alt="sheet" />
          <div className="hero-text hero-text-white">
            <h1>Únete</h1>
            <h2 className="hero-subText"> a nuestros grupos</h2>
            <Link to="/groups">
              <i className="hero-link">Click aquí</i>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={people} alt="" />
          <div className="hero-text">
            <h1>Únete</h1>
            <h2 className="hero-subText">a nuestra red social </h2>
            <Link to="/login">
              <i className="hero-link">Click aquí</i>
            </Link>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default Slider;
