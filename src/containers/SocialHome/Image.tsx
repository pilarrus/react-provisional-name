import React from "react";
import image from "../../images/coffee.jpg";

export const CoffeeImage = () => {

  return (
    <div className="social__right-image">
      <img src={image} alt="coffee" />
    </div>
  )
}

export default CoffeeImage;