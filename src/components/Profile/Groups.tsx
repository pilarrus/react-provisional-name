import React, { useState } from "react";
import Modal from "./Modal";

export const ProfileGroups: React.FC = () => {
  const [openGroups, setGroups] = useState(false);
  const [createAdventure, setCreateAdventure] = useState(false);

  const style = {
    fontSize: "2rem"
  };
  console.log(openGroups);
  return (
    <div className="profile__groups">
      <button
        onClick={() => setGroups(!openGroups)}
        className="profile__groups-b1 heading heading--stroke heading--shadow"
        style={style}
      >
        Aventuras de la semana
      </button>
      <button
        onClick={() => setCreateAdventure(!createAdventure)}
        className="profile__groups-b1 heading heading--stroke heading--shadow"
        style={style}
      >
        Crear aventura
      </button>
      {openGroups ? (
        <Modal info="view" changestate={setGroups} />
      ) : createAdventure ? (
        <Modal info="create" changestate={setCreateAdventure} />
      ) : null}
    </div>
  );
};

export default ProfileGroups;
