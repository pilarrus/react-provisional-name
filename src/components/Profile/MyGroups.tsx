import React, { useContext } from "react";
import groupsContext from "../../contexts/GroupsContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { ContextUserType } from "../../types";
import { count, updateGroups, updateUser } from "../../utils/functions";
import ButtonDelete from "../Reusable/ButtonDelete";
import FormatDate from "../Reusable/FormatDate";
import UserContext from "../../contexts/UserContext";

const MyGroups: React.FC<ContextUserType> = ({user, setUser}) => {
  const contextGroups = useContext(groupsContext);
  console.log('--------contextGroups--------', contextGroups.groups);

  const contextUser = useContext(UserContext);
  console.log('--------contextUser--------MyGroups', contextUser.user);

  return (
    <div className="profile-myGroups">
      <div className="myGroups__cointainer">
        {user.myGroups ? (
          user.myGroups.map(group => {
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
          <span>Aún no tienes grupos</span>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
