import { Groups } from "../types";
import alberto from "../images/profile/alberto.jpeg";
import ana from "../images/profile/ana.jpeg";
import javier from "../images/profile/javier.jpeg";
import marcela from "../images/profile/marcela.jpg";
import pablo from "../images/profile/pablo.jpeg";
import pili from "../images/profile/pili.jpg";
import climbing from "../images/groups/climber.jpeg";
import rafting from "../images/groups/rafting.jpg";
import rafting2 from "../images/groups/rafting2.jpg";
import jet_ski from "../images/groups/jet_ski.jpg";
import jet_ski2 from "../images/groups/jet_ski2.jpg";
import hiking from "../images/groups/hiking.jpg";

export default [
  {
    id: "1",
    name: "No seas psoe que quiero ir a la montaña",
    id_adventure: "1",
    name_adventure: "Escalada",
    bg: climbing,
    timestamp: 1604838600,
    place: "Buitrago de Lozoya",
    maxSize: 6,
    users: [
      { nick: "Anita", img: ana },
      { nick: "Paroar", img: pablo }
    ]
  },
  {
    id: "2",
    name: "Menos Madrid y más campo",
    id_adventure: "3",
    name_adventure: "Rafting",
    bg: rafting,
    timestamp: 1600016400,
    place: "Guadarrama",
    maxSize: 12,
    users: []
  },
  {
    id: "3",
    name: "Podemos ir al río",
    id_adventure: "3",
    name_adventure: "Rafting",
    bg: rafting2,
    timestamp: 1607783400,
    place: "Rascafría",
    maxSize: 10,
    users: [
      { nick: "Albertillo", img: alberto },
      { nick: "Marcela", img: marcela }
    ]
  },
  {
    id: "4",
    name: "Ciudadanos motorizados",
    id_adventure: "5",
    name_adventure: "Moto de agua",
    bg: jet_ski,
    timestamp: 1587054600,
    place: "San Martín de Valdeiglesias",
    maxSize: 15,
    users: [{ nick: "Anita", img: ana }]
  },
  {
    id: "5",
    name: "Pepe y Pepa se van de juerga",
    id_adventure: "5",
    name_adventure: "Moto de agua",
    bg: jet_ski2,
    timestamp: 1592899200,
    place: "El Atazar",
    maxSize: 8,
    users: []
  },
  {
    id: "6",
    name: "Enanitos en el VoxQue",
    id_adventure: "7",
    name_adventure: "Senderismo",
    bg: hiking,
    timestamp: 1598005800,
    place: "Navacerrada",
    maxSize: 6,
    users: [
      { nick: "Anita", img: ana },
      { nick: "Paroar", img: pablo },
      { nick: "Pilarusi", img: pili },
      { nick: "Marcela", img: marcela },
      { nick: "Albertillo", img: alberto },
      { nick: "Javier", img: javier },
    ]
  }
] as Groups;
