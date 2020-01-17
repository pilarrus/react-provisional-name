import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import users from "../../fake-data/usersRegisters";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";
import NoFriend from "./Friend";

export const NoFriends: React.FC<{ friends?: User[][] }> = props => {
  const [persons, setPersons] = useState(false);
  let finalFriends = [] as User[];
  const contextUser = useContext(UserContext);

  //console.log(props.friends);

  if (props.friends) {
    let flatFriends = props.friends.flat();
    users.forEach(user => {
      if (user !== contextUser.user) {
        if (!flatFriends.includes(user)) finalFriends.push(user);
      }
    });
  } else if (props.friends === undefined) {
    users.forEach(user => {
      if (user !== contextUser.user) {
        finalFriends.push(user);
      }
    });
  }

  /*if (contextUser.user) {
    finalFriends.find(e => console.log(e.id !== contextUser.user.id));
  }*/

  return (
    <div className="profile__friends">
      <div className="profile__friends-box">
        <div className="icon__friends">
          <img
            src={icon}
            alt="icon"
            className="icon"
            onClick={() => setPersons(!persons)}
          />
        </div>
      </div>
      {persons ? (
        <div className="nofriends">
          {finalFriends.map(friend =>
            friend.id !== contextUser.user.id ? (
              <NoFriend friend={friend} key={friend.id} />
            ) : null
          )}
        </div>
      ) : null}
    </div>
  );
};

export default NoFriends;
