import React from "react";
import icon_plus from "../../images/icons/sprite.svg";

const ButtonPlus: React.FC<{ viewMore?: () => void }> = ({
  viewMore
}) => (
  <button className="button-plus" onClick={viewMore}>
    <svg className="plus__icon">
      <use xlinkHref={icon_plus + `#icon-plus`}></use>
    </svg>
  </button>
);

export default ButtonPlus;
