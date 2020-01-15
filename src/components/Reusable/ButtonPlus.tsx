import React from "react";
import icon_plus from "../../images/icons/sprite.svg";

const ButtonPlus: React.FC<{ changeState?: () => void }> = ({
  changeState
}) => (
  <button className="button-plus" onClick={changeState}>
    <svg className="plus__icon">
      <use xlinkHref={icon_plus + `#icon-plus`}></use>
    </svg>
  </button>
);

export default ButtonPlus;
