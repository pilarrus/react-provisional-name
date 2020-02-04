import React, { useContext, useState } from "react";
import groupsContext from "../../contexts/GroupsContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { User } from "../../types";
import { count } from "../../utils/functions";
import ButtonDelete from "../Reusable/ButtonDelete";
import FormatDate from "../Reusable/FormatDate";
import UserContext from "../../contexts/UserContext";

const MyGroups: React.FC = () => {
  const contextGroups = useContext(groupsContext);
  console.log('--------contextGroups--------', contextGroups.groups);

  const contextUser = useContext(UserContext);
  const [userOnline, setUserOnline] = useState(contextUser.user);
  //let userOnline = contextUser.user;
  console.log('--------contextUser--------MyGroups', contextUser.user);

  const updateContextGroup = () => {
    console.log("updateContextGroup___________")
    const groupsFire = fire
    .database()
    .ref(`db/groups`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      contextGroups.setGroups(snapshot.val());
    }

    groupsFire.once("value", cbk);
  };

  const updateContextUser = () => {
    console.log("updateContextUser***************")
    const usersFire = fire.database().ref(`db/users/${userOnline.id}`);
    

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      let user: User = snapshot.val();
      console.log("........................",user);
      contextUser.setUser(user);
      setUserOnline(user);
    };

    /*const cbk = (snapshot: firebase.database.DataSnapshot) => {
      if(contextUser.user) {
        snapshot.forEach(u => {
          const newVal: User = u.val();
          //console.log("newValue>>", newVal);
          if (newVal.id === contextUser.user.id) {
            console.log("newValue>>", newVal);
            contextUser.setUser(newVal);
            setUserOnline(newVal);
          }
        });
      }
    };*/

    usersFire.once("value", cbk);
  };

  return (
    <div className="profile-myGroups">
      <div className="myGroups__cointainer">
        {userOnline.myGroups ? (
          userOnline.myGroups.map(group => {
            let myGroup = contextGroups.groups.find(g => g.name === group);
            let groupService = new GroupService(fire);
            return (
              <div key={myGroup!.id} className="myGroup">
                <ButtonDelete
                  deleteGroup={() => {
                    groupService.removeGroupFromUser(myGroup!, userOnline);
                    updateContextGroup();
                    updateContextUser();
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
