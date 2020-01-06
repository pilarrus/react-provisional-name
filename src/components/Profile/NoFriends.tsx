import React from "react";
import icon from "../../images/profile/user.svg";

export const NoFriends: React.FC = () => {
  return (
    <div className="profile__friends">
      <div className="profile__friends-box">
        <div className="icon__friends">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NoFriends;
