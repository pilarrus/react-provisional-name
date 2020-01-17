import React from "react";

const ButtonRainbow: React.FC<{ text: string; changeState?: () => void; disabled: boolean }> = ({
  text,
  changeState,
  disabled
}) => (
  <div className="btn--rainbow">
    <button type="submit" className="btn" onClick={changeState} disabled={disabled}>
      {text}
    </button>
  </div>
);

export default ButtonRainbow;
