import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import firebase from "../../enviroments/enviroment";
import iconNo from "../../images/profile/no.svg";
import iconSi from "../../images/profile/si.svg";
import { User, Users } from "../../types";
import ImageProfile from "./ImageProfile";

export const Info: React.FC<{
  user: User;
}> = ({ user }) => {
  const contextUser = useContext(UserContext);
  const [request, setRequest] = useState([] as string[]);
  const [fireUsers, setFireUsers] = useState([] as Users);

  const style = {
    width: "30px"
  };

  const dbRef = firebase.database().ref("users");
  contextUser.setUser(user);
  console.log(fireUsers);
  useEffect(() => {
    if (user.request) {
      setRequest(Object.values(user.request));
    }

    dbRef.on("child_added", function(data) {
      setFireUsers(data.val());
    });
  }, [user]);

  const [display, setDisplay] = useState(false);

  //de momento muestra las personas de la base de datos
  //añadir como amigo en friends y eliminar de request
  const addFriend = (friend: string) => {
    console.log("ACEPTO A:", friend);
    const key = contextUser.user.myFriends.length;
    dbRef.child(`${contextUser.user.id}/myFriends`).update({ [key]: friend });
    dbRef.child(`${contextUser.user.id}/request`).remove();
  };

  //borrar de request
  const removeFriend = (friend: string) => {
    console.log("RECHAZO A:", friend);
  };
  return (
    <div className="profile__info">
      <div className="profile__info-name">
        <h1 className="heading heading--stroke heading--shadow">
          {user.gender === "male"
            ? "Bienvenido"
            : user.gender === "female"
            ? "Bienvenida"
            : "Bienvenid@"}
          <br></br>
          <span className="heading heading--stroke heading--shadow">
            {user.name}
          </span>
          {user.request ? (
            <span onClick={() => setDisplay(!display)}>{request.length}</span>
          ) : null}
        </h1>
        {display ? (
          <div>
            {user.request
              ? request.map(e => (
                  <div key={e}>
                    <span>{e}</span>
                    <span onClick={() => addFriend(e)}>
                      <img
                        src={iconSi}
                        alt="iconsi"
                        className="icon"
                        style={style}
                      />
                    </span>
                    <span onClick={() => removeFriend(e)}>
                      <img
                        src={iconNo}
                        alt="iconno"
                        className="icon"
                        style={style}
                      />
                    </span>
                  </div>
                ))
              : null}
          </div>
        ) : null}
      </div>
      <ImageProfile user={user} />
    </div>
  );
};

export default Info;
