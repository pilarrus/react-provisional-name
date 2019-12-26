import React, { ReactNode, useEffect } from "react";

export const Modal: React.FC<{
  children: ReactNode;
  handle: (bool: boolean) => void;
}> = props => {
  /* 
  Este componente: recibe cualquier componente (children) que se pinta dentro del modal
  Se le pasa la f() que cambia el estado del modal de abierto a cerrado (handle: true or false)
  */

  const ESCAPE_KEY = 27;

  //const DELETE_KEY=46;
  //const ENTER_KEY = 13;

  // CONTROLA QUE AL DAR A ESC SE CIERRE EL MODAL

  /***************************/

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === ESCAPE_KEY) {
        props.handle(false);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [props]);

  /***************************/

  return (
    <div className="profile__modal" onClick={() => props.handle(false)}>
      <div
        className="profile__modal-content"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="profile__modal-close"
          onClick={() => props.handle(false)}
        >
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
