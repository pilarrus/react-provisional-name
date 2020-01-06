import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Profile/Logout";
import ColorContext from "../contexts/ColorContext";
import LoginContext from "../contexts/LoginContext";
import logo from "../images/logos/logoBlanco.png";
//change: (option: any) => void;
const Nav: React.FC<{ handleSideBar: any }> = ({ handleSideBar }) => {
  const contextColor = useContext(ColorContext);
  const contextLog = useContext(LoginContext);

  //console.log("CONTEXT EN NAV", contextLog);
  return (
    <div className={`navbar ${contextColor.colorNav}`}>
      <div className="toggle-sidebar">
        <div onClick={handleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <ul className="navbar__theme">
        <li className="navbar__theme-menu row">
          <i className="fa fa-gear"></i>Cambiar Tema
          <div className="options">
            <button
              onClick={() => {
                contextColor.setColorNav("cyan");
                contextColor.setColorSide("black");
              }}
            >
              Tema original
            </button>
            <button
              onClick={() => {
                contextColor.setColorNav("green");
                contextColor.setColorSide("darkgreen");
              }}
            >
              Tema verde
            </button>
            <button
              onClick={() => {
                contextColor.setColorNav("purple");
                contextColor.setColorSide("darkpurple");
              }}
            >
              Tema morado
            </button>
            <button
              onClick={() => {
                contextColor.setColorNav("red");
                contextColor.setColorSide("darkred");
              }}
            >
              Tema rojo
            </button>
          </div>
        </li>

        <li>
          <Link to="/login" onClick={() => contextLog.setLog(false)}>
            {!contextLog.log ? "Login" : <Logout />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
