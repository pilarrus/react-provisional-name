import React from "react";

type AvatarProps = {
  nick: string;
  img: string;
};

const Avatar: React.FC<AvatarProps> = ({ nick, img }) => {
  const style = {
    width: "50px",
    heigth: "50px",
    backgroundImage: "url(" + img + ")",
    backgroundPosition: "top",
    backgroundSize: "cover"
  };

  return (
    <div style={style}>
      <p>{nick}</p>
    </div>
  );
};

export default Avatar;
