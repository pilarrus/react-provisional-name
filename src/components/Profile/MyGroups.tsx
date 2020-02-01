import React, { useContext } from "react";
import groupsContext from "../../contexts/GroupsContext";
//import { Groups } from "../../types";
import { count } from "../../utils/functions";
import FormatDate from "../Reusable/FormatDate";

type myGroupsProps = {
  groups: String[];
};
const MyGroups: React.FC<myGroupsProps> = ({ groups }) => {
  const contextGroups = useContext(groupsContext);

  return (
    <div className="myGroups">
      {groups ? (
        groups.map(group => {
          let myGroup = contextGroups.groups.find(g => g.name === group);
          return (
            <div key={myGroup!.id} className="myGroup">
              <div className="myGroup__left">
                <FormatDate timestamp={myGroup!.timestamp} />
              </div>
              <div className="myGroup__right">
                <span>{myGroup!.name_adventure}</span>
                <span>{myGroup!.name}</span>
                <span>Participarán {count(myGroup!.users)} miembros</span>
              </div>
            </div>
          );
        })
      ) : (
        <span>Aún no tienes grupos</span>
      )}
    </div>
  );
};

export default MyGroups;
