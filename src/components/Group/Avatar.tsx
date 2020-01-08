import React from "react";

type AvatarProps = {
  nick: string;
  img: string;
};

const Avatar: React.FC<AvatarProps> = ({ nick, img }) => {
  const style = {
    backgroundImage: "url(" + img + ")",
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
