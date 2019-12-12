import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../contexts/ColorContext";
import logo from "../images/logos/logoBlanco.png";
import logo2 from "../images/logos/logoBlancoVert.png";

const Nav: React.FC = () => {
  const context = useContext(ColorContext);
  console.log(context);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${context.colorNav}`}>
      <i id="menu-toggle" className="">
        <span className="navbar-toggler-icon"></span>
      </i>
      <Link to="/" className="navbar-brand font-bold logoHOR">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/" className="navbar-brand font-bold logoVERT">
        <img src={logo2} alt="logo2" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-4"
        aria-controls="navbarSupportedContent-4"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i className="fa fa-envelope mr-2"></i>Contacto
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-gear mr-2"></i>Cambiar tema
            </Link>
            <div className="dropdown-menu">
              <Link to="/" className="dropdown-item">
                Tema turquesa (original)
              </Link>
              <Link to="/" className="dropdown-item">
                Tema clarito
              </Link>
              <Link to="/" className="dropdown-item">
                Tema oscuro
              </Link>
              <Link to="/" className="dropdown-item">
                Tema violeta
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="/"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink-4"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-user mr-2"></i>Mi perfil
            </Link>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-cyan"
              aria-labelledby="navbarDropdownMenuLink-4"
            >
              <Link to="/" className="dropdown-item" href="#">
                Opciones
              </Link>
              <Link to="/login" className="dropdown-item" href="#">
                Login
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
