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
  nivel: string;
  email: string;
  name: string;
  misgrupos: string[];
  misAmigos: string[];
  img: string;
};

export type Users = User[];

export type Group = {
  name: string;
  timestamp: number;
  place: string;
  sizeGroup: number;
  users: string[];
};

export type Groups = {
  [id: string]: {
    adventure: string;
    groups: Group[] | string;
  };
};
