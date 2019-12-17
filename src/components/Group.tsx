import React from "react";
import FormatDate from "./Reusable/FormatDate";

type PropsGroup = {
  name: string;
  place: string;
  timestamp: number;
};

const groupStyle = {
  height: "200px",
  border: "1px solid black",
  borderRadius: "5px"
};

const Group: React.FC<PropsGroup> = ({ name, place, timestamp }) => {
  return (
    <div className="group" style={groupStyle}>
      <h3>{name}</h3>
      <p>{place}</p>
      <FormatDate timestamp={timestamp}/>
      <div className="btn--rainbow">
        <button type="submit" className="btn">VER</button>
      </div>
    </div>
  );
};

export default Group;
