import alberto from "../images/profile/alberto.jpeg";
import ana from "../images/profile/ana.jpeg";
import marcela from "../images/profile/marcela.jpg";
import pablo from "../images/profile/pablo.jpeg";
import pili from "../images/profile/pili.jpg";
import { Users } from "../types";

export default [
  {
    id: 0,
    nick: "Anita",
    password: "123",
    level: "principiante",
    email: "anita@aventura.com",
    name: "Ana",
    myGroups: [],
    myFriends: ["Paroar", "Pilarusi", "Albertillo"],
    img: ana,
    gender: "female"
  },
  {
    id: 1,
    nick: "Paroar",
    password: "123",
    level: "principiante",
    email: "pablito@aventura.com",
    name: "Pablo",
    myGroups: ["enanitos del VoxQ"],
    myFriends: ["Marcela"],
    img: pablo,
    gender: "male"
  },
  {
    id: 2,
    nick: "Pilarusi",
    password: "123",
    level: "principiante",
    email: "pili@aventura.com",
    name: "Pilar",
    myGroups: ["enanitos del VoxQ"],
    myFriends: ["Albertillo", "Anita"],
    img: pili,
    gender: "female"
  },
  {
    id: 3,
    nick: "Albertillo",
    password: "123",
    level: "principiante",
    email: "alberto@aventura.com",
    name: "Alberto",
    myGroups: ["enanitos del VoxQ"],
    myFriends: ["Pilarusi", "Anita", "Paroar", "Marcela"],
    img: alberto,
    gender: "male"
  },
  {
    id: 4,
    nick: "Marcela",
    password: "123",
    level: "principiante",
    email: "marcerla@aventura.com",
    name: "Marcela",
    myGroups: ["enanitos del VoxQ"],
    myFriends: [],
    img: marcela,
    gender: "female"
  }
] as Users;
