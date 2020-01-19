import React from "react";

type AvatarProps = {
  nick: string;
  img: string;
};

const Avatar: React.FC<AvatarProps> = ({ nick, img }) => {
  const style = {
    backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/react-9cbc4.appspot.com/o/" + img + ")",
    backgroundPosition: "top",
    backgroundSize: "cover"
  };

  return (
    <div style={style} className="avatar">
      <span>{nick}</span>
    </div>
  );
};

export default Avatar;
