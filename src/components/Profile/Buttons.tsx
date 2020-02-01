import React, { useState } from "react";
import Groups from "../../pages/Groups";
import AddGroup from "../Group/AddGroup";
import Modal from "./Modal";

export const ProfileGroups: React.FC = () => {
  const [openGroups, setOpenGroups] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);

  const style = {
    fontSize: "2rem"
  };

  return (
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
      {openGroups 
      ? (<Modal handle={setOpenGroups}>
          <Groups />
        </Modal>)
      : openCreate
        ? (<AddGroup viewMore={() => setOpenCreate(!openCreate)} />)
        : null}
    </div>
  );
};

export default ProfileGroups;
