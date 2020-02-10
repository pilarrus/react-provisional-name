import React from "react";
import { User } from "../../types";
import FinalAvatar from "./Avatar/FinalAvatar";

export const ImageProfile: React.FC<{
  user: User;
}> = ({ user }) => {
  return (
    <div className="profile__info-picture">
      <FinalAvatar user={user} />
    </div>
  );
};

export default ImageProfile;
