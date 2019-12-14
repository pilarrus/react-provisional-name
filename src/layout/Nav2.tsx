
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../contexts/ColorContext";
import logo from "../images/logos/logoBlanco.png";
//change: (option: any) => void;
const Nav2: React.FC<{ handleSideBar: any }> = ({ handleSideBar }) => {
  const context = useContext(ColorContext);
  return (

    <div className={`navbar ${context.colorNav}`}>
      <div className="toggle-sidebar" >
        <Link to="/" onClick={handleSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li><i className="fa fa-gear"></i>Cambiar Tema</li>
        <div className="optionTheme">
          <button onClick={() => {
            context.setColorNav("cyan");
            context.setColorSide("black");
          }}>Tema original</button>
          <button onClick={() => {
            context.setColorNav("green");
            context.setColorSide("darkgreen");
          }}>Tema verde</button>
          <button onClick={() => {
            context.setColorNav("purple");
            context.setColorSide("darkpurple");
          }}>Tema morado</button>
          <button onClick={() => {
            context.setColorNav("red");
            context.setColorSide("darkred");
          }}>Tema rojo</button>
        </div>
      </ul>
      <ul>
        <li><i className="fa fa-user"></i>Login</li>
      </ul>
    </div>





  );
};

export default Nav2;