import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../contexts/ColorContext";

const Sidebar: React.FC = (props) => {
  const context = useContext(ColorContext);
  console.log(props);

  const style = {
    classClose: "oculta"
  }

  return (
    //@ts-ignore
    <div className={`sidebar ${context.colorSide} ${props.sidebar ? "" : style.classClose}`}>
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