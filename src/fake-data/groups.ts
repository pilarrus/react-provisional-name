import { Groups } from "../types";
import ana from "../images/profile/ana.jpg";
import pablo from "../images/profile/pablo.jpg";

export default {
  1: {
    adventure: "Escalada",
    groups: [
      {
        name: "No seas psoe que quiero ir a la montaña",
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
        timestamp: 1581957000,
        place: "Guadarrama",
        sizeGroup: 10,
        users: []
      },
      {
        name: "Podemos ir al río",
        timestamp: 1607783400,
        place: "Rascafría",
        sizeGroup: 10,
        users: []
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
        timestamp: 1576236600,
        place: "San Martín de Valdeiglesias",
        sizeGroup: 10,
        users: []
      },
      {
        name: "Pepe y Pepa se van de juerga",
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
        timestamp: 1598005800,
        place: "Navacerrada",
        sizeGroup: 10,
        users: []
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
