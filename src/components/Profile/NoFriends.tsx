import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import users from "../../fake-data/usersRegisters";
import send from "../../images/profile/mail.svg";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";

export const NoFriends: React.FC<{ friends?: User[][] }> = props => {
  const [persons, setPersons] = useState(false);
  let finalFriends = [] as User[];
  const contextUser = useContext(UserContext);
  const { user } = useContext(UserContext);

  console.log(">>>>>>>>>>", user);
  if (props.friends) {
    let flatFriends = props.friends.flat();
    users.forEach(user => {
      if (user !== contextUser.user) {
        if (!flatFriends.includes(user)) finalFriends.push(user);
      }
    });
  }

  /* if (contextUser.user) {
    finalFriends.find(e => console.log(e.id !== contextUser.user.id));
  }
  */

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

const NoFriend: React.FC<{ friend: User }> = ({ friend }) => {
  const [add, setAdd] = useState(icon);

  return (
    <div className="friends_img">
      <img src={friend.img} alt="friend" className="image" />
      <div className="middle">
        <span className="nofriends-name">{friend.name}</span>
        <span onClick={() => setAdd(send)}>
          <div className="icon__nofriends">
            <img src={add} alt="icon" className="icon" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default NoFriends;
