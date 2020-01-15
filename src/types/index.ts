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
};

export type Users = User[];

export type PartialUser = {
  nick: string;
  img: string;
};
export type Users2 = PartialUser[];

export type Group = {
  id: string;
  name: string;
  id_adventure: string;
  name_adventure: string;
  bg: string;
  timestamp: number;
  place: string;
  maxSize: number;
  users: PartialUser[] | [];
};

export type Groups = Group[];
