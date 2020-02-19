import React, { useContext } from "react";
import groupsContext from "../../contexts/GroupsContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { ContextUserType } from "../../types";
import { count, updateGroups, updateUser } from "../../utils/functions";
import ButtonDelete from "../Reusable/ButtonDelete";
import FormatDate from "../Reusable/FormatDate";
import UserContext from "../../contexts/UserContext";

const MyGroups: React.FC<ContextUserType & {zIndex?: number}> = ({user, setUser, zIndex}) => {
  const contextGroups = useContext(groupsContext);

  const contextUser = useContext(UserContext);

  const style = {
    "zIndex": (typeof zIndex !== 'undefined') ? zIndex : 0
  };

  const myGroup = () => {
    let groups = Object.values(user.myGroups);
    let myGroup: string[] = [];
    groups.forEach(group => {
      if(typeof group !== 'undefined') {
        myGroup.push(group);
      }
    });
    return myGroup;
  };

  let groups = user.myGroups
  ? Array.isArray(user.myGroups)
    ? user.myGroups
    : myGroup()
  : "Aún no tienes grupos";

  return (
    <div className="profile-myGroups">
      <div className="myGroups__cointainer" style={style}>
        {typeof groups !== 'string' ? (
          groups.map(group => {
            let myGroup = contextGroups.groups.find(g => g.name === group);
            let groupService = new GroupService(fire);
            return (
              <div key={myGroup!.id} className="myGroup">
                <ButtonDelete
                  deleteGroup={() => {
                    groupService.removeGroupFromUser(myGroup!, user);
                    updateGroups(contextGroups.setGroups);
                    updateUser(user, contextUser.setUser, setUser);
                  }
                  }
                />
                <div className="myGroup__left">
                  <FormatDate timestamp={myGroup!.timestamp} />
                </div>
                <div className="myGroup__right">
                  <span className="myGroup__right--adventure">
                    {myGroup!.name_adventure}
                  </span>
                  <span className="myGroup__right--name">{myGroup!.name}</span>
                  <span className="myGroup__right--users">
                    Participarán {count(myGroup!.users)} aventureros
                  </span>
                </div>
              </div>
            );
          })
        ) : (
        <span>{groups}</span>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
