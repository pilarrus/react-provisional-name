import React from "react";
import users from "../../fake-data/usersRegisters";

export const Friends: React.FC<{ friends: string[] }> = props => {
  /***
   recorre los amigos que llegan por props (map ¿por qué con forEach no funciona?)
   por cada amigo filtra los usuarios (usersRegisters) del json que coincidan con el amigo mapeado
   con ello se obtiene el objeto con la imagen
  ***/
  var myFriends = props.friends.map(element => {
    return users.filter(option => option.nick === element);
  });

  return (
    <div className="profile__friends">
      <div className="profile__friends-box">
        {myFriends.map(friends =>
          friends.map(friend => (
            <div className="friends_img" key={friend.id}>
              <img src={friend.img} alt="friend" className="image" />
              <div className="middle">
                <span className="text">{friend.name}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Friends;
