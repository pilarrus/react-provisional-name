import React from "react";


const Button: React.FC<{ title: string, labelButton: string }> = ({ title = "", labelButton }) => (
  <div className="social__right-btn">
    <p>{title}</p>
    <button>{labelButton}</button>
  </div>
);


export default Button;