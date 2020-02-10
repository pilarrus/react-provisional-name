import fire from "../enviroments/enviroment";
import {
  ContextUserType,
  Group,
  Groups,
  PartialUser,
  TypeAdventure,
  User,
  Users
} from "../types";

const convertDegreesToThermalSensation = (degrees: number): string => {
  let thermalSensation;
  if (degrees <= 15) {
    thermalSensation = "cold";
  } else if (degrees > 15 && degrees < 30) {
    thermalSensation = "warmth";
  } else {
    thermalSensation = "very hot";
  }
  return thermalSensation;
};

const count = (x: PartialUser[] | Users): number => {
  if (x !== undefined) {
    var count = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== undefined) {
        count = count + 1;
      }
    }
    return count;
  }
  return 0;
};

const createGroup = (
  id: string,
  name: string,
  id_adventure: string,
  name_adventure: string,
  timestamp: number,
  place: string,
  maxSize: number,
  user: User
): Group => {
  let u: PartialUser = { nick: user.nick, img: user.img };
  let users = [u];
  return {
    id: id,
    name: name,
    id_adventure: id_adventure,
    name_adventure: name_adventure,
    bg:
      "groups%2Fdefault.jpg?alt=media&token=06c25e8d-afd8-499f-a25b-cd1aee2bc690",
    timestamp: timestamp,
    place: place,
    maxSize: maxSize,
    users: users
  };
};

const getAdventure = (activity: string, adventures: TypeAdventure[]) =>
  adventures.find(adventure => adventure.name === activity);

const getCurrentDate = () => {
  let fullDate = new Date();
  let day = fullDate.getDate();
  let dayCopy = day < 10 ? `0${day}` : day;
  let month = fullDate.getMonth() + 1;
  let monthCopy = month < 10 ? `0${month}` : month;
  let year = fullDate.getFullYear();
  return year + "-" + monthCopy + "-" + dayCopy;
};

const getCurrentHour = () => {
  let fullDate = new Date();
  let hour = fullDate.getHours() + 1;
  let hourCopy = hour < 10 ? `0${hour}` : hour;
  let minutes = fullDate.getMinutes();
  let minutesCopy = minutes < 10 ? `0${minutes}` : minutes;
  return `${hourCopy}:${minutesCopy}`;
};

const getLastID = (groups: Groups) => {
  let allIDs: number[] = [];
  groups.forEach(group => allIDs.push(parseInt(group.id)));
  let lastID = Math.max(...allIDs);
  return lastID;
};

const getNameGroups = (groups: Groups) => {
  let nameGroups: string[] = [];
  groups.forEach(group => nameGroups.push(group.name));
  return nameGroups;
};

const getTimestamp = (date: string, time: string) => {
  let year = parseInt(date.substr(0, 4));
  let month = parseInt(date.substr(5, 2)) - 1;
  let day = parseInt(date.substr(8, 2));
  let hour = parseInt(time.substr(0, 2));
  let minutes = parseInt(time.substr(3, 2));
  let dateObj = new Date(year, month, day, hour, minutes);
  return dateObj.getTime() / 1000;
};

const getUser = (contextUser: ContextUserType) => {
  if (contextUser.user !== undefined) {
    let user: PartialUser = {
      nick: contextUser.user.nick,
      img: contextUser.user.img
    };
    return user;
  }
  return undefined;
};

const compareTo = (x: Group, y: Group) => {
  if (x.name_adventure < y.name_adventure) return -1;
  else if (x > y) return 1;
  return 0;
};

const sortByTypeAdventure = (groups: Groups) => {
  return groups.sort(compareTo);
};

const sortGroups = (sortBy: string, groups: Groups) => {
  switch (sortBy) {
    case "alphabetical":
      return groups.sort((x: Group, y: Group) => {
        if (x.name < y.name) return -1;
        else if (x > y) return 1;
        return 0;
      });
    case "latestDate":
      return groups.sort((x: Group, y: Group) => {
        if (x.timestamp < y.timestamp) return -1;
        else if (x > y) return 1;
        return 0;
      });
    case "typeAdventure":
      return groups.sort((x: Group, y: Group) => {
        if (x.name_adventure < y.name_adventure) return -1;
        else if (x > y) return 1;
        return 0;
      });
    default:
      return groups.sort((x: Group, y: Group) => {
        if (x.name < y.name) return -1;
        else if (x > y) return 1;
        return 0;
      });
  }
};

const updateGroups = (setGroupsContext: (_groups: Groups) => void) => {
  //console.log("updateContextGroup___________***");
  const groupsFire = fire.database().ref(`db/groups`);

  const cbk = (snapshot: firebase.database.DataSnapshot) => {
    setGroupsContext(snapshot.val());
  };

  groupsFire.once("value", cbk).catch(e => console.log(e));
};

const updateUser = (
  user: User,
  setUserContext: (_user: User) => void,
  setUserState?: (_user: User) => void
) => {
  console.log("updateContextUser************___");
  const usersFire = fire.database().ref(`db/users`);

  const cbk = (snapshot: firebase.database.DataSnapshot) => {
    if (user) {
      snapshot.forEach(u => {
        const newVal: User = u.val();
        if (newVal.id === user.id) {
          setUserContext(newVal);
          if (typeof setUserState === "function") {
            setUserState(newVal);
          }
        }
      });
    }
  };

  usersFire.once("value", cbk);
};

const userSignOnGroup = (group: Group, user: User) => {
  if (user.myGroups) {
    let groupExist = user.myGroups.find(groupUser => groupUser === group.name);
    return groupExist ? true : false;
  } else {
    return false;
  }
};

export {
  convertDegreesToThermalSensation,
  count,
  createGroup,
  getAdventure,
  getCurrentDate,
  getCurrentHour,
  getLastID,
  getNameGroups,
  getTimestamp,
  getUser,
  compareTo,
  sortByTypeAdventure,
  sortGroups,
  updateGroups,
  updateUser,
  userSignOnGroup
};
