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
  getTimestamp
} from "../../utils/functions";
import ButtonClose from "../Reusable/ButtonClose";
import Title from "../Reusable/Title";
import municipalities from "../Weather/municipality_codes";
import { Redirect } from "react-router-dom";
import { User } from "../../types";

type AddGroupProps = {
  viewMore: () => void;
};

const AddGroup: React.FC<AddGroupProps> = ({ viewMore }) => {
  
  const [name, setName] = useState("");
  const [activity, setActivity] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [maxSize, setMaxSize] = useState("");
  
  let contextGroups = useContext(GroupsContext);
  let groups = contextGroups.groups;
  //console.log('--------contextGroups--------', contextGroups.groups);
  let nameGroups = getNameGroups(groups);
  let nameExist = nameGroups.includes(name);
  let nowDate = getCurrentDate();

  const contextLog = useContext(LoginContext);
  const contextUser = useContext(UserContext);
  //console.log('--------contextUser--------', contextUser.user);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        viewMore();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [viewMore]);

  const updateContextGroup = () => {
    const groupsFire = fire
    .database()
    .ref(`db/groups`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      contextGroups.setGroups(snapshot.val());
    }

    groupsFire.once("value", cbk);
  };

  const updateContextUser = () => {
    const usersFire = fire
    .database()
    .ref(`db/users`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      if(contextUser.user) {
        snapshot.forEach(u => {
          const newVal: User = u.val();
          if (newVal.id === contextUser.user.id) {
            contextUser.setUser(newVal);
          }
        });
      }
    };

    usersFire.once("value", cbk);
  };

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
    var user = contextUser.user
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
            <Redirect to="/login" />
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
            {municipalities.map(municipality => <option key={municipality.codmun}>{municipality.label}</option>)}
          </select>
          <br />

          <input
            type="date"
            min={nowDate}
            name="date"
            className="form-input"
            onChange={e => setDate(e.target.value)}
            required
          />
          <br />

          {date !== nowDate ? (
            <input
              type="time"
              name="time"
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
            onClick={() => {
              groupService.save(group, user!)
              viewMore();
              updateContextGroup();
              updateContextUser();
            }}
          >
            Crear grupo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
