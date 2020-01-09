import { Groups } from "../types";
import alberto from "../images/profile/alberto.jpeg";
import ana from "../images/profile/ana.jpeg";
import marcela from "../images/profile/marcela.jpg";
import pablo from "../images/profile/pablo.jpeg";
import pili from "../images/profile/pili.jpg";
import climbing from "../images/groups/climber.jpeg";
import rafting from "../images/groups/rafting.jpg";
import rafting2 from "../images/groups/rafting2.jpg";
import jet_ski from "../images/groups/jet_ski.jpg";
import jet_ski2 from "../images/groups/jet_ski2.jpg";
import hiking from "../images/groups/hiking.jpg";

export default {
  1: {
    adventure: "Escalada",
    groups: [
      {
        name: "No seas psoe que quiero ir a la montaña",
        bg: climbing,
        timestamp: 1579102200,
        place: "Buitrago de Lozoya",
        sizeGroup: 10,
        users: [
          {nick: "Anita", img: ana}, {nick: "Paroar", img: pablo}
        ]
      }
    ]
  },
  2: {
    adventure: "Tirolinas",
    groups: "Aún no hay grupos, crea uno."
  },
  3: {
    adventure: "Rafting",
    groups: [
      {
        name: "Menos Madrid y más campo",
        bg: rafting,
        timestamp: 1581957000,
        place: "Guadarrama",
        sizeGroup: 10,
        users: []
      },
      {
        name: "Podemos ir al río",
        bg: rafting2,
        timestamp: 1607783400,
        place: "Rascafría",
        sizeGroup: 10,
        users: [{nick: "Albertillo", img: alberto}, {nick: "Marcela", img: marcela}]
      }
    ]
  },
  4: {
    adventure: "Piraguísmo",
    groups: "Aún no hay grupos, crea uno."
  },
  5: {
    adventure: "Moto de agua",
    groups: [
      {
        name: "Ciudadanos caminando",
        bg: jet_ski,
        timestamp: 1576236600,
        place: "San Martín de Valdeiglesias",
        sizeGroup: 10,
        users: [{nick: "Anita", img: ana}]
      },
      {
        name: "Pepe y Pepa se van de juerga",
        bg: jet_ski2,
        timestamp: 1577705400,
        place: "El Atazar",
        sizeGroup: 10,
        users: []
      }
    ]
  },
  6: {
    adventure: "Quad",
    groups: "Aún no hay grupos, crea uno."
  },
  7: {
    adventure: "Senderismo",
    groups: [
      {
        name: "Enanitos en el VoxQue",
        bg: hiking,
        timestamp: 1598005800,
        place: "Navacerrada",
        sizeGroup: 10,
        users: [{nick: "Anita", img: ana}, {nick: "Paroar", img: pablo}, {nick: "Pilarusi", img: pili}]
      }
    ]
  },
  8: {
    adventure: "Ski",
    groups: "Aún no hay grupos, crea uno."
  },
  9: {
    adventure: "Snowboard",
    groups: "Aún no hay grupos, crea uno."
  }
} as Groups;
