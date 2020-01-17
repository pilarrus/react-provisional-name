import React, { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../../contexts/UserContext";
import firebase from "../../enviroments/enviroment";
import send from "../../images/profile/mail.svg";
import iconNo from "../../images/profile/no.svg";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";

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

export default NoFriend;
