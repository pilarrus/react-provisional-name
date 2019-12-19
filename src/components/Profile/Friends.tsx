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
    <div className="friends">
      <h1>Amig@s</h1>
      {myFriends.map(friends =>
        friends.map(friend => (
          <div className="friends_img">
            <span>{friend.name}</span>
            <img src={friend.img} alt="friend" />
          </div>
        ))
      )}
    </div>
  );
};

export default Friends;
