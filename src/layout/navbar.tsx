import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoMadridAdventure.png";


export default class Navbar extends Component {
  render() {

    return (
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="nav__links">
          <ul>
            <li>
              <Link to="/" className="nav__links-link nav__links-link-1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/adventures" className="nav__links-link nav__links-link-2">
                Nuestras aventuras
              </Link>
            </li>

            <li>
              <Link to="/" className="nav__links-link nav__links-link-3">
                Grupos
              </Link>

              <ul className="nav__links-submenu">
                <li>
                  <Link to="/" className="nav__links-link nav__links-link-submenu">
                    Crear Grupo (oculto)
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav__links-link nav__links-link-submenu">
                    Grupos Disponibles (oculto)
                  </Link>
                </li>
              </ul>
              <li>
                <Link to="/login" className="nav__links-link nav__links-link-4">
                  Login
              </Link>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
