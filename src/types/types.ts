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
  fecha: Date,
  lugar: string,
  sizeGroup: number,
  users: string[]
};

export type Groups = {[index: string]: Group[] | string};