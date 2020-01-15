import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { User } from "../../types";
import ImageProfile from "./ImageProfile";

export const Info: React.FC<{
  user: User;
}> = ({ user }) => {
  const contextUser = useContext(UserContext);
  const [request, setRequest] = useState([] as string[]);

  contextUser.setUser(user);

  useEffect(() => {
    if (user.request) {
      setRequest(Object.values(user.request));
    }
  }, []);

  const [display, setDisplay] = useState(false);

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
                    <button>Add</button>
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
