import React from "react";

/*const ButtonRainbow = (text: string) => {
  return (
    <div className="btn--rainbow">
      <button type="submit" className="btn">{text}</button>
    </div>
  );
};*/

const ButtonRainbow: React.FC<{ text: string }> = ({ text }) => (
  <div className="btn--rainbow">
    <button type="submit" className="btn">
      {text}
    </button>
  </div>
);

export default ButtonRainbow;
