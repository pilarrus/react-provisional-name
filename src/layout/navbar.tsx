import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2SinFondo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="pingus" />
          </Link>
        </div>

        <div className="buttons-container">
          <ul>
            <li>
              <Link to="/" className="navh__tab">
                HOME
              </Link>
            </li>
            <li className="submenu">
              <Link to="/" className="navh__tab">
                SUBMENU
              </Link>

              <ul className="contenidosubmenu">
                <li>
                  <Link to="/" className="navh__tab">
                    Crear Grupo
                  </Link>
                </li>
                <li>
                  <Link to="/" className="navh__tab">
                    Grupos Disponibles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/" className="navh__tab">
                Registro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
