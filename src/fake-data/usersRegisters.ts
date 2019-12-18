import img1 from "../images/profile/person1.jpg";
import { Users } from "../types";

export default [
  {
    id: 0,
    nick: "Anita",
    password: "123",
    nivel: "principiante",
    email: "anita@aventura.com",
    name: "Ana",
    misgrupos: [],
    misAmigos: ["Paroar", "Pilarusi", "Albertillo"],
    img: img1
  },
  {
    id: 1,
    nick: "Paroar",
    password: "123",
    nivel: "principiante",
    email: "pablito@aventura.com",
    name: "Pablo",
    misgrupos: ["enanitos del VoxQ"],
    misAmigos: ["Marcela"],
    img: img1
  },
  {
    id: 2,
    nick: "Pilarusi",
    password: "123",
    nivel: "principiante",
    email: "pili@aventura.com",
    name: "Pilar",
    misgrupos: ["enanitos del VoxQ"],
    misAmigos: ["Albertillo", "Anita"],
    img: img1
  },
  {
    id: 3,
    nick: "Albertillo",
    password: "123",
    nivel: "principiante",
    email: "alberto@aventura.com",
    name: "Alberto",
    misgrupos: ["enanitos del VoxQ"],
    misAmigos: ["Pilarusi", "Anita", "Paroar", "Marcela"],
    img: img1
  },
  {
    id: 4,
    nick: "Marcela",
    password: "123",
    nivel: "principiante",
    email: "marcerla@aventura.com",
    name: "Marcela",
    misgrupos: ["enanitos del VoxQ"],
    misAmigos: [],
    img: img1
  }
] as Users;
