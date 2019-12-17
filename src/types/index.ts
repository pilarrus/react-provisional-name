export type TypeAdventure = {
  id: string;
  name: string;
  photo: string;
  info: string;
  thermalSensation: string;
};

export type User = {
  nick: string;
  email: string;
  name: string;
  misgrupos: string[];
  misAmigos: string[];
};

export type Users = User[];

export type TypeGroup = {
  name: string,
  timestamp: number,
  place: string,
  sizeGroup: number,
  users: string[]
};

export type Groups = {
  [id: string] : {
    adventure: string,
    groups: TypeGroup[] | string
  }
};