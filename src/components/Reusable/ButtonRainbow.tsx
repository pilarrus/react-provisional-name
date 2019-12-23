import React from "react";

const ButtonRainbow: React.FC<{ text: string; changeState?: () => void }> = ({
  text,
  changeState
}) => (
  <div className="btn--rainbow">
    <button type="submit" className="btn" onClick={changeState}>
      {text}
    </button>
  </div>
);

export default ButtonRainbow;
