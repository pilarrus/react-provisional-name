import React from "react";
import Groups from "../../pages/Groups";
import AddGroup from "../AddGroup";

export const Modal: React.FC<{
  info: string;
  changestate: React.Dispatch<React.SetStateAction<boolean>>;
}> = props => {
  const changeState = () => {
    props.changestate(true);
  };
  console.log(props.info);
  console.log(props.changestate);
  const insideModal = (info: string) => {
    return info === "view" ? (
      <Groups />
    ) : info === "create" ? (
      <AddGroup changeState={changeState} />
    ) : null;
  };
  return <div className="profile__modal">{insideModal(props.info)}</div>;
};

export default Modal;
