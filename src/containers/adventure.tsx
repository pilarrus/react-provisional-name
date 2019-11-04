import React from "react";


const Adventure = (props: { name: string, photo: string; }) => {
  return (
    <div className="col-1-of-3 adventure">
      <div>
        <img src={props.photo} alt="adventure"/>
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sint
          praesentium magni?
        </p>
      </div>
    </div>
  );
};

export default Adventure;
