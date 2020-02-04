import React, { useState } from "react";
import AddGroup from "../Group/AddGroup";
import MyGroups from "./MyGroups";

export const ProfileGroups: React.FC = () => {
  const [openGroups, setOpenGroups] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const style = {
    fontSize: "2rem"
  };

  return (
    <>
    <div className="profile__groups">
      <button
        onClick={() => setOpenGroups(!openGroups)}
        className="profile__groups-b1 heading heading--stroke heading--shadow"
        style={style}
      >
        Mis grupos
      </button>
      
      <button
        onClick={() => setOpenCreate(!openCreate)}
        className="profile__groups-b1 heading heading--stroke heading--shadow"
        style={style}
      >
        Crear grupo
      </button>

      {openCreate
        ? (<AddGroup viewMore={() => setOpenCreate(!openCreate)} />)
        : null}
      </div>
      
      {openGroups 
      ? (<MyGroups />)
      : null}
      </>
  );
};

export default ProfileGroups;
