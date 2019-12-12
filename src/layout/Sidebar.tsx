import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApiWeather from "../containers/ApiWeather";
import ColorContext from "../contexts/ColorContext";

const Sidebar: React.FC = () => {
  const context = useContext(ColorContext);

  return (
    <div id="wrapper" className="toggled">
      <div id="sidebar-wrapper" className={`${context.colorSide}`}>
        {
          // da el estilo lateral
        }
        <ul className="sidebar-nav">
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/adventures">Aventuras</Link>
          </li>
          <li>
            <Link to="/groups">Grupos</Link>
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
};

export default Sidebar;
