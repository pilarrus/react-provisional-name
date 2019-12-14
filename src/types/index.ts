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

export type Group = {
  name: string,
  timestamp: number,
  //date: Date,
  place: string,
  sizeGroup: number,
  users: string[]
};

//export type Groups = {[index: string]: Group[] | string};

export type Groups = {
  [id: string] : {
    adventure: string,
    groups: Group[] | string
  }
};

export type Group2 = {
  name: string,
  adventureName: string,
  adventureID: string,
  timestamp: number,
  place: string,
  sizeGroup: number,
  users: string[]
};

export type Groups2 = {
  [index: string]: Group2
};