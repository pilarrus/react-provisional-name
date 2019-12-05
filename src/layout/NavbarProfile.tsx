import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="wrapper">
        <header id="#header">
          <a href="#" id="menu_on">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Mis amigos</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Ver grupos disponibles</a></li>
            <li><a href="#">Temas</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
        </nav>
        <section id="content">
          ...Contenido...
        </section>
      </div>
    );
  }
}

/*<nav className="navbar__profile">
        <div className="navbar__profile-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar__profile-links">
          <ul>
            <li>
              <Link to="/" className="navbar__profile-link">
                Mis amigos
      </Link>
            </li>
            <li>
              <Link to="/" className="navbar__profile-link">
                Configuración
      </Link>
            </li>
            <li>
              <Link to="/" className="navbar__profile-link">
                Temas
      </Link>
            </li>
            <li>
              <Link to="/" className="navbar__profile-link">
                Salir
      </Link>
            </li>
          </ul>
        </div>
      </nav>*/