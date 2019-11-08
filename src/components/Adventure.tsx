import React from "react";

const AdventureComponent = (props: { name: string, photo: string, info: string; }) => {
  return (
    <div className="adventure" data-testid="adventure">
      <div>
        <img src={props.photo} alt="adventure"/>
      </div>
      <h3>{props.name}</h3>
      <div>
        {props.info}
      </div>
    </div>
  );
};

export default AdventureComponent;
