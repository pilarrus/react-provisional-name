import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ApiWeather from "../containers/ApiWeather";
import ColorContext from "../contexts/ColorContext";
import LoginContext from "../contexts/LoginContext";
import LogoutSidebar from "./LogoutSidebar";

const Sidebar: React.FC<{ sidebar: boolean }> = ({ sidebar }) => {
  const context = useContext(ColorContext);
  const contextLog = useContext(LoginContext);
  const style = {
    classClose: "oculta"
  };

  const [screenSize, setSize] = useState(window.screen.width);

  // detecta el ancho de la pantalla:
  const displayWindowSize = () => {
    var anchoPantalla = document.documentElement.clientWidth;
    setSize(anchoPantalla);
  };

  window.addEventListener("resize", displayWindowSize);
  //@ts-ignore
  const tiempo = () => {
    return (
      <li>
        <ApiWeather />
      </li>
    );
  };

  return (
    <div
      className={`sidebar ${context.colorSide} ${
        sidebar ? "" : style.classClose
      }`}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/adventures">Aventuras</Link>
        </li>
        <li>
          <Link to="/groups">Grupos</Link>
        </li>
        <li>
          <Link to="/aboutus">Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>

        {!contextLog.log ? (
          <li>
            <Link to="/login">Login </Link>
          </li>
        ) : (
          <LogoutSidebar />
        )}

        <li>{screenSize > 425 ? <ApiWeather /> : null}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
