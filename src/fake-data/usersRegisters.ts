import faker from "faker";
import { Users } from "../pages/Grupos";

export default [
  {
    nick: "anita89",
    email: faker.internet.email(),
    name: "Ana",
    misgrupos: [],
    misAmigos: ["paroar666"]
  },
  {
    nick: "paroar666",
    email: faker.internet.email(),
    name: "Pablo",
    misgrupos: ["enanitos del VoxQ"],
    misAmigos: []
  }
] as Users;
