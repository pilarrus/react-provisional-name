import React from "react";
import person1 from "../../images/profile/person1.jpg";

export const Friends: React.FC = () => {
  return (
    <div className="friends_box">
      <h1>Amig@s</h1>
      <div>
        <div className="friends_img">
          <span>Pablo666</span>
          <img src={person1} alt="friend" />
        </div>
        <div className="friends_img">
          <span>Pablo666</span>
          <img src={person1} alt="friend" />
        </div>
        <div className="friends_img">
          <span>Pablo666</span>
          <img src={person1} alt="friend" />
        </div>
      </div>
    </div>
  );
};

export default Friends;
