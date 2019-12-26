import React, { useState } from "react";
import Groups from "../../pages/Groups";
import AddGroup from "../AddGroup";
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
        Aventuras de la semana
      </button>
      <button
        onClick={() => setOpenCreate(!openCreate)}
        className="profile__groups-b1 heading heading--stroke heading--shadow"
        style={style}
      >
        Crear aventura
      </button>
      {openGroups ? (
        <Modal handle={setOpenGroups}>
          <Groups />
        </Modal>
      ) : openCreate ? (
        <Modal handle={setOpenCreate}>
          <AddGroup changeState={() => setOpenCreate(!openCreate)} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ProfileGroups;
