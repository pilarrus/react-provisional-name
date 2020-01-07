import React, { useState } from "react";
import users from "../../fake-data/usersRegisters";
import send from "../../images/profile/mail.svg";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";

export const NoFriends: React.FC<{ friends?: User[][] }> = props => {
  const [persons, setPersons] = useState(false);
  const [add, setAdd] = useState(icon);
  let finalFriends = [] as User[];
  if (props.friends) {
    props.friends.forEach(friend => {
      friend.forEach(element =>
        users.forEach(user => {
          console.log(element.name, " YYYY", user.name);
          if (element.name === user.name) {
            finalFriends.push(element);
          }
        })
      );
    });
  }
  console.log("Variable", finalFriends);
  const sendRequest = () => {
    setAdd(send);
  };
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
          {users.map(friend => (
            <div className="friends_img" key={friend.id}>
              <img src={friend.img} alt="friend" className="image" />
              <div className="middle">
                <span className="nofriends-name">{friend.name}</span>
                <span onClick={sendRequest}>
                  <div className="icon__nofriends">
                    <img
                      src={add}
                      alt="icon"
                      className="icon"
                      onClick={() => setAdd}
                    />
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NoFriends;
