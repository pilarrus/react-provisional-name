import React, { useContext, useEffect, useState } from "react";
import groupsContext from "../../contexts/GroupsContext";
//import UserContext from "../../contexts/UserContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { User } from "../../types";
import { count } from "../../utils/functions";
import ButtonDelete from "../Reusable/ButtonDelete";
import FormatDate from "../Reusable/FormatDate";

type myGroupsProps = {
  user: User;
  setUser: (_user: User) => void;
};
const MyGroups: React.FC<myGroupsProps> = ({ user, setUser }) => {
  const contextGroups = useContext(groupsContext);
  const [userOnline, setUserOnline] = useState(user);
  const [remove, setRemove] = useState(false);


  useEffect(() => {
    const data = fire.database().ref(`db/users`);
    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      snapshot.forEach(u => {
        const newVal: User = u.val();
        if (newVal.id === user.id) {
          setUser(newVal);
          setUserOnline(newVal);
        }
      });
    };
    data.on("value", cbk);
    return () => {
      data.off("value", cbk);
    };
  }, [remove]);

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
                    setRemove(true);
                    groupService.removeGroupFromUser(myGroup!, userOnline);
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
