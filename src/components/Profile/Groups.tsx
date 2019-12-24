import React, { useState } from "react";
import Modal from "./Modal";

export const ProfileGroups: React.FC = () => {
  const [openGroups, setGroups] = useState(false);
  const [createAdventure, setCreateAdventure] = useState(false);

  console.log(openGroups);
  return (
    <div className="profile__groups">
      <h1 className="profile-title">Localiza o crea tus Aventuras</h1>
      <button onClick={() => setGroups(!openGroups)}>
        Ver grupos disponibles
      </button>
      <button onClick={() => setCreateAdventure(!createAdventure)}>
        Crear aventura
      </button>
      {openGroups ? <Modal /> : null}
    </div>
  );
};

export default ProfileGroups;
