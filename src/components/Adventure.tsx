import React from "react";
//import { typeAdventure } from "../types/adventure";

const AdventureComponent = (props: { name: string, photo: string, info: string; }) => {
  return (
    <div className="col-1-of-3 adventure" data-testid="adventure">
      <div >
        <img src={props.photo} alt="adventure"/>
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>
        {props.info}
      </div>
    </div>
  );
};

export default AdventureComponent;
