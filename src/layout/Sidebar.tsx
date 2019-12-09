import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiWeather from "../containers/ApiWeather";
export default class Sidebar extends Component {
  render() {
    return (<div id="wrapper" className="toggled">
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand"><a href="#">Menú principal</a></li>
          <li><Link to="/adventures" >Aventuras</Link></li>
          <li><Link to="/">Grupos</Link></li>
          <li><Link to="/">El tiempo</Link></li>
          <li><Link to="/">Eventos</Link></li>
          <li><Link to="/">Nosotros</Link></li>
          <li><Link to="/">Contacto</Link></li>
        </ul>

        <ul>
          <li>  <ApiWeather /></li>
        </ul>
      </div>
    </div>);
  }
}
