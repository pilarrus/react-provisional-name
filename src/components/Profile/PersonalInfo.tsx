import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { User } from "../../types";
import ImageProfile from "./ImageProfile";

export const Info: React.FC<{
  user?: User;
}> = () => {
  const contextUser = useContext(UserContext);
  let userOnline = contextUser.user;
  //contextUser.setUser(user);

  return (
    <div className="profile__info">
      <div className="profile__info-name">
        <h1 className="heading heading--stroke heading--shadow">
          {userOnline.gender === "male"
            ? "Bienvenido"
            : userOnline.gender === "female"
            ? "Bienvenida"
            : "Bienvenid@"}
          <br></br>
          <span className="heading heading--stroke heading--shadow">
            {userOnline.name}
          </span>
        </h1>
      </div>
      <ImageProfile user={userOnline} />
    </div>
  );
};

export default Info;
