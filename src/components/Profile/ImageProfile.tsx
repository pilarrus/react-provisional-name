import React, { useState } from "react";
import icon from "../../images/profile/anadir-imagen.svg";
import { User } from "../../types";
import FinalAvatar from "./Avatar/FinalAvatar";

export const ImageProfile: React.FC<{
  user: User;
}> = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const styleInput = {
    display: "none"
  };

  const styleIcon = {
    width: "50px",
    height: "50px"
  };

  const fileChangedHandler = (event: any) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };

  const uploadHandler = () => {
    console.log(selectedFile);
  };
  return (
    <div className="profile__info-picture">
      <FinalAvatar user={user} />

      <div className="middle">
        <label htmlFor="file">
          <img src={icon} alt="icon" style={styleIcon} />
        </label>
        <input
          type="file"
          onChange={fileChangedHandler}
          id="file"
          style={styleInput}
        />
        <button onClick={uploadHandler}>Upload!</button>
      </div>
    </div>
  );
};

export default ImageProfile;
