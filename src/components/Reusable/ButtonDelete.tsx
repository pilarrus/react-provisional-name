import React from "react";
import icon_cross from "../../images/icons/sprite.svg";

const ButtonDelete: React.FC<{ deleteGroup?: () => void }> = ({
  deleteGroup
}) => (
  <button className="button-close" onClick={deleteGroup}>
    <svg className="cross__icon">
      <use xlinkHref={icon_cross + `#icon-remove-user`}></use>
    </svg>
  </button>
);

export default ButtonDelete;