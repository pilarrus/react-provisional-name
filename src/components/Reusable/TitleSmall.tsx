import React from "react";

const TitleSmall: React.FC<{ title: string; semiTransparent: boolean }> = ({
  title,
  semiTransparent
}) => {
  return semiTransparent ? (
    <div className="titleSmall bgSemiTransparent">{title}</div>
  ) : (
    <div className="titleSmall">{title}</div>
  );
};

export default TitleSmall;
