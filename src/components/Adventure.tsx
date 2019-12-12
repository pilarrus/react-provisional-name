import React from "react";
import { Link } from "react-router-dom";

const AdventureComponent = (props: {
  name: string;
  photo: string;
  info: string;
}) => {
  const style = {
    backgroundImage: "url(" + props.photo + ")",
    backgroundPosition: "top",
    backgroundSize: "cover"
  };

  return (
    <Link to={`/groups/${props.name}`}>
      <div className="adventure" data-testid="adventure" style={style}>
        <div className="adventure__content">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
        </div>
      </div>
    </Link>
  );
};

export default AdventureComponent;
