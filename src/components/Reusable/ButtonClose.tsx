import React from "react";
import icon_cross from "../../images/icons/sprite.svg";

const ButtonClose: React.FC<{ viewMore?: () => void }> = ({
  viewMore
}) => (
  <button className="button-close" onClick={viewMore}>
    <svg className="cross__icon">
      <use xlinkHref={icon_cross + `#icon-cross`}></use>
    </svg>
  </button>
);

export default ButtonClose;
