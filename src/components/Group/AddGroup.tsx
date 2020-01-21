import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";
import GroupsContext from "../../contexts/GroupsContext";
import adventures from "../../fake-data/adventures";
import ButtonClose from "../Reusable/ButtonClose";
import Title from "../Reusable/Title";
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
import GroupService from "../../services/groupServices";
import fire from "../../enviroments/enviroment";


type AddGroupProps = {
  changeState: () => void;
};

const AddGroup: React.FC<AddGroupProps> = ({ changeState }) => {
  let contextGroups = useContext(GroupsContext);
  //console.log("contextGroups>>>>>>", contextGroups.groups);
  let groups = contextGroups.groups;
  console.log("g",groups);

  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxSize, setMaxSize] = useState("");
  const [nowDate] = useState(getCurrentDate());
  const [nameGroups] = useState(getNameGroups(groups));

  let nameExist = nameGroups.includes(name);

  console.log("name>>>", name);
  console.log("activity>>>", activity);
  console.log("place>>>", place);
  console.log("date>>>", date);
  console.log("time>>>", time);
  console.log("maxSize>>>", maxSize);
  console.log("lastID>>", getLastID(groups));

  const places = [
    { id: 1, name: "Buitrago de Lozoya" },
    { id: 2, name: "El Atazar" },
    { id: 3, name: "Guadarrama" },
    { id: 4, name: "Navacerrada" },
    { id: 5, name: "Rascafría" },
    { id: 6, name: "San Martín de Valdeiglesias" }
  ];

  const contextLog = useContext(LoginContext);
  console.log("Log", contextLog.log);
  const contextUser = useContext(UserContext);
  console.log("user>>>", getUser(contextUser));

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        changeState();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [changeState]);

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
    let lastID = getLastID(groups)+1;
    let id = String(lastID);
    let id_adventure = "";
    let name_adventure = "";
    let adventure = getAdventure(activity, adventures);
    if (typeof adventure !== undefined) {
      //@ts-ignore
      id_adventure = adventure.id;
      //@ts-ignore
      name_adventure = adventure.name;
    }
    let user = getUser(contextUser);
    var group = createGroup(
      id,
      name,
      id_adventure,
      name_adventure,
      getTimestamp(date, time),
      place,
      parseInt(maxSize),
      //@ts-ignore
      user
    );
    console.log(group);
  }

  //let groupService: GroupService;
  let groupService = new GroupService(fire);

  return (
    <div className="modal" onClick={changeState}>
      <div
        className="modal__container modal_addGroup"
        onClick={e => e.stopPropagation()}
      >
        <ButtonClose changeState={changeState} />
        <Title title="Añadir Grupo" />

        <form action="" className="form__addGroup">
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
            onClick={() => groupService.save(group)}
          >
            Crear grupo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
