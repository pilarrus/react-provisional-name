import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../contexts/ColorContext";

const Sidebar: React.FC<{ sidebar: boolean }> = ({ sidebar }) => {
  const context = useContext(ColorContext);

  const style = {
    classClose: "oculta"
  }

  return (
    <div className={`sidebar ${context.colorSide} ${sidebar ? "" : style.classClose}`}>
      <ul>
        <li><Link to="/adventures">Aventuras</Link></li>
        <li><Link to="/groups">Grupos</Link></li>
        <li><Link to="/">Eventos</Link></li>
        <li><Link to="/">Nosotros</Link></li>
        <li><Link to="/">Contacto</Link></li>
      </ul>
    </div>

  );
};

export default Sidebar;