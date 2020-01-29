import React, { useContext, useEffect, useState } from "react";
import GroupsContext from "../../contexts/GroupsContext";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";
import fire from "../../enviroments/enviroment";
import adventures from "../../fake-data/adventures";
import GroupService from "../../services/groupServices";
import {
  createGroup,
  getAdventure,
  getCurrentDate,
  getCurrentHour,
  getLastID,
  getNameGroups,
  getTimestamp,
  getUser
} from "../../utils/functions";
import ButtonClose from "../Reusable/ButtonClose";
import Title from "../Reusable/Title";

type AddGroupProps = {
  viewMore: () => void;
};

const AddGroup: React.FC<AddGroupProps> = ({ viewMore }) => {
  let contextGroups = useContext(GroupsContext);
  let groups = contextGroups.groups;

  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxSize, setMaxSize] = useState("");
  const [nowDate] = useState(getCurrentDate());
  const [nameGroups] = useState(getNameGroups(groups));

  let nameExist = nameGroups.includes(name);

  const places = [
    { id: 1, name: "Buitrago de Lozoya" },
    { id: 2, name: "El Atazar" },
    { id: 3, name: "Guadarrama" },
    { id: 4, name: "Navacerrada" },
    { id: 5, name: "Rascafría" },
    { id: 6, name: "San Martín de Valdeiglesias" }
  ];

  const contextLog = useContext(LoginContext);
  const contextUser = useContext(UserContext);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        viewMore();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [viewMore]);

  const completedForm = () => {
    return (
      name === "" ||
      activity === "" ||
      place === "" ||
      date === "" ||
      time === "" ||
      maxSize === "" ||
      nameExist ||
      contextLog.log === false
    );
  };

  if (!completedForm()) {
    let lastID = getLastID(groups) + 1;
    let id = String(lastID);
    let adventure = getAdventure(activity, adventures);
    let id_adventure = adventure!.id;
    let name_adventure = adventure!.name;
    var user = getUser(contextUser);
    var group = createGroup(
      id,
      name,
      id_adventure,
      name_adventure,
      getTimestamp(date, time),
      place,
      parseInt(maxSize),
      user!
    );
  }

  let groupService = new GroupService(fire);

  return (
    <div className="modal" onClick={viewMore}>
      <div
        className="modal__container modal_addGroup"
        onClick={e => e.stopPropagation()}
      >
        <ButtonClose viewMore={viewMore} />
        <Title title="Añadir Grupo" />

        <form
          action=""
          className="form__addGroup"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {!contextLog.log && (
            <span className="advert">
              Es necesario iniciar sesión para crear un grupo
            </span>
          )}
          <input
            type="text"
            placeholder="Nombre del grupo"
            className="form-input"
            name="name"
            onChange={e => setName(e.target.value.trim())}
            required
          />
          <br />
          {nameExist && (
            <span className="advert">
              El nombre ya existe, por favor elige otro
            </span>
          )}

          <select
            required
            name="activity"
            defaultValue={"Default"}
            className="form-input"
            onChange={e => setActivity(e.target.value)}
          >
            <option value="Default" disabled>
              Tipo de actividad
            </option>
            {adventures.map(adventure => (
              <option key={adventure.id}>{adventure.name}</option>
            ))}
          </select>
          <br />

          <select
            required
            name="place"
            defaultValue={"Default"}
            className="form-input"
            onChange={e => setPlace(e.target.value)}
          >
            <option value="Default" disabled>
              Lugar
            </option>
            {places.map(place => (
              <option key={place.id}>{place.name}</option>
            ))}
          </select>
          <br />

          <input
            type="date"
            min={nowDate}
            name="date"
            placeholder="Fecha"
            className="form-input"
            onChange={e => setDate(e.target.value)}
            required
          />
          <br />

          {date !== nowDate ? (
            <input
              type="time"
              name="time"
              placeholder="Hora"
              className="form-input"
              onChange={e => setTime(e.target.value)}
              required
            />
          ) : (
            <input
              type="time"
              name="time"
              min={getCurrentHour()}
              max="23:59"
              placeholder="Hora"
              className="form-input"
              onChange={e => setTime(e.target.value)}
              required
            />
          )}
          <br />

          <input
            type="number"
            min={2}
            max={20}
            name="maxSize"
            placeholder="Tamaño máx del grupo"
            className="form-input"
            onChange={e => setMaxSize(e.target.value)}
            required
          />
          <br />

          <button
            type="submit"
            className="button__addGroup"
            disabled={completedForm()}
            onClick={() => groupService.save(group, user!)}
          >
            Crear grupo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
