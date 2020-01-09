import React, { useState } from "react";
import users from "../../fake-data/usersRegisters";
import send from "../../images/profile/mail.svg";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";

const NoFriend: React.FC<{ friend: User }> = ({ friend }) => {
  const [add, setAdd] = useState(icon);
  return (
    <div className="friends_img" key={friend.id}>
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

export const NoFriends: React.FC<{ friends?: User[][] }> = props => {
  const [persons, setPersons] = useState(false);
  let finalFriends = [] as User[];
  //const contextUser = useContext(UserContext);

  if (props.friends) {
    let flatFriends = props.friends.flat();
    users.forEach(user => {
      if (!flatFriends.includes(user)) finalFriends.push(user);
    });
  }

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
          {finalFriends.map(friend => (
            <NoFriend friend={friend} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NoFriends;
