export type TypeAdventure = {
  id: string;
  name: string;
  photo: string;
  info: string;
  thermalSensation: string;
};

export type User = {
  id: number;
  nick: string;
  password: string;
  level: string;
  email: string;
  name: string;
  myGroups: string[];
  myFriends: string[];
  gender: string;
  img: string;
  request: string[];
};

export type Users = User[];

export type TypeGroup = {
  name: string;
  timestamp: number;
  place: string;
  sizeGroup: number;
  users: string[];
};

export type Groups = {
  [id: string]: {
    adventure: string;
    groups: TypeGroup[] | string;
  };
};
