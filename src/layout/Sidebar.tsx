import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApiWeather from "../containers/ApiWeather";
import ColorContext from "../contexts/ColorContext";

const Sidebar: React.FC<{ sidebar: boolean }> = ({ sidebar }) => {
  const context = useContext(ColorContext);

  const style = {
    classClose: "oculta"
  }

  return (
    <div className={`sidebar ${context.colorSide} ${sidebar ? "" : style.classClose}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adventures">Aventuras</Link></li>
        <li><Link to="/groups">Grupos</Link></li>
        <li><Link to="/aboutus">Nosotros</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li>
          <ApiWeather />
        </li>

      </ul>
    </div>

  );
};

export default Sidebar;