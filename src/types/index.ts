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

export type PartialUser = {
  nick: string;
  img: string
}
export type Users2 = PartialUser[];

export type TypeGroup = {
  name: string,
  timestamp: number,
  place: string,
  sizeGroup: number,
  users: PartialUser[] | []
};

export type Groups = {
  [id: string] : {
    adventure: string,
    groups: TypeGroup[] | string
  }
};

export type Groups2 = {
  [adventureName: string]: TypeGroup[] | string;
};
