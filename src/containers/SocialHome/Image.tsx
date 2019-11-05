import React from "react";
import image from "../../images/landscape2.jpg";

export const CoffeeImage = () => {

  return (
    <div className="social__left-image">
      <img src={image} alt="coffee" className="social__left-image-coffee" width="100%" />
    </div>
  )
}

export default CoffeeImage;