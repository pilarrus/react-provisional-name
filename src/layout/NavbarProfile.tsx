import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="overlay"></div>
        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                Brand
                  </a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Works <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li className="dropdown-header">Dropdown heading</li>
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>

          </ul>
        </nav>

      </div>
    );
  }
}

/*

    <li><a href="#">Home</a></li>
            <li><a href="#">Mis amigos</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Ver grupos disponibles</a></li>
            <li><a href="#">Temas</a></li>
            <li><a href="#">Salir</a></li>



<nav classNameName="navbar__profile">
        <div classNameName="navbar__profile-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div classNameName="navbar__profile-links">
          <ul>
            <li>
              <Link to="/" classNameName="navbar__profile-link">
                Mis amigos
      </Link>
            </li>
            <li>
              <Link to="/" classNameName="navbar__profile-link">
                Configuración
      </Link>
            </li>
            <li>
              <Link to="/" classNameName="navbar__profile-link">
                Temas
      </Link>
            </li>
            <li>
              <Link to="/" classNameName="navbar__profile-link">
                Salir
      </Link>
            </li>
          </ul>
        </div>
      </nav>*/