import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../contexts/UserContext";
import firebase from "../../enviroments/enviroment";
import users from "../../fake-data/usersRegisters";
import send from "../../images/profile/mail.svg";
import iconNo from "../../images/profile/no.svg";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";

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

const NoFriend: React.FC<{ friend: User }> = ({ friend }) => {
  const [add, setAdd] = useState(icon);
  const contextUser = useContext(UserContext);

  const sendRequest = (friend: User) => {
    const dbRef = firebase
      .database()
      .ref("users")
      .child(`${friend.id}/request`);

    const newRequest = dbRef.push([]);

    //RECUPERAR LAS SOLICITUDES QUE TIENE EL SOLICITADO PARA VER SI ESTÁ REPETIDA:
    dbRef.orderByKey().on("value", function(data) {
      const dataRequests = data.val();

      if (dataRequests !== null) {
        const requests = Object.values(dataRequests);

        if (!requests.includes(contextUser.user.nick)) {
          console.log("enviada");
          setAdd(send);
          newRequest.set(`${contextUser.user.nick}`);
        } else {
          console.log("ya sois amigos");
          setAdd(iconNo);
        }
      } else {
        console.log("enviadaaaaa");
        setAdd(send);
        newRequest.set(`${contextUser.user.nick}`);
      }
    });
  };

  const componentIsMounted = useRef(false);
  useEffect(() => {
    componentIsMounted.current = true;
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  return (
    <div className="friends_img">
      <img src={friend.img} alt="friend" className="image" />
      <div className="middle">
        <span className="nofriends-name">{friend.name}</span>
        <span>
          <div className="icon__nofriends">
            <img
              src={add}
              alt="icon"
              className="icon"
              onClick={() => sendRequest(friend)}
            />
          </div>
        </span>
      </div>
    </div>
  );
};

export default NoFriends;
