import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { User } from "../../types";
import ImageProfile from "./ImageProfile";

export const Info: React.FC<{
  user: User;
}> = ({ user }) => {
  const contextUser = useContext(UserContext);

  contextUser.setUser(user);

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
        </h1>
      </div>
      <ImageProfile user={user} />
    </div>
  );
};

export default Info;
