import React from "react";

const AdventureComponent = (props: { name: string, photo: string, info: string; }) => {
  return (
<<<<<<< HEAD
    <div className="col-1-of-3 adventure" data-testid="adventure">
      <div >
=======
    <div className="adventure" data-testid="adventure">
      <div>
>>>>>>> 9205b8b458dc0eef5c05f0df16138e9c7d833e72
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
