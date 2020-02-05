import React, { useContext } from "react";
import groupsContext from "../../contexts/GroupsContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { User } from "../../types";
import { count } from "../../utils/functions";
import ButtonDelete from "../Reusable/ButtonDelete";
import FormatDate from "../Reusable/FormatDate";
import UserContext from "../../contexts/UserContext";

type ButtonsProps = {
  user: User,
  setUser: (user: User) => void
}

const MyGroups: React.FC<ButtonsProps> = ({user, setUser}) => {
  const contextGroups = useContext(groupsContext);
  console.log('--------contextGroups--------', contextGroups.groups);

  const contextUser = useContext(UserContext);
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
    const usersFire = fire.database().ref(`db/users/${user.id}`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      let newUser: User = snapshot.val();
      console.log("........................",newUser);
      setUser(newUser);
      contextUser.setUser(newUser);
    };

    usersFire.once("value", cbk);
  };

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
