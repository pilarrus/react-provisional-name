import React, { Component } from "react";
import { Link } from "react-router-dom";
import ApiWeather from "../containers/ApiWeather";
export default class Sidebar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          {
            // da el estilo lateral
          }
          <ul className="sidebar-nav">
            <li>
              <Link to="/adventures">Aventuras</Link>
            </li>
            <li>
              <Link to="/">Grupos</Link>
            </li>

            <li>
              <Link to="/">Eventos</Link>
            </li>
            <li>
              <Link to="/">Nosotros</Link>
            </li>
            <li>
              <Link to="/">Contacto</Link>
            </li>
          </ul>
          <ul>
            <li>
              <ApiWeather />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
