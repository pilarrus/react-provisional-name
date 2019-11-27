import React from "react";

const Title: React.FC<{ title: string; nameClass?: string }> = ({
  title,
  nameClass = "title"
}) => (
  <div>
    <h1 className={nameClass}>{title}</h1>
  </div>
);

export default Title;
