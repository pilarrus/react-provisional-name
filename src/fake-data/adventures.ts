import climbing from "../images/adventures/climbing.jpg";
import rafting from "../images/adventures/rafting.jpg";
import zip_lines from "../images/adventures/zip_lines.jpg";
import canoeing from "../images/adventures/canoeing.jpg";
import jet_ski from "../images/adventures/jet_ski.jpg";
import quad from "../images/adventures/quad.jpg";
import hiking from "../images/adventures/hiking.jpg";
import ski from "../images/adventures/ski.jpg";
import snowboard from "../images/adventures/snowboard.jpg";
import { TypeAdventure } from '../types';

export default [
  {
    id: '1',
    name: "Escalada",
    photo: climbing,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpra esentium magni",
    thermalSensation: "warmth"
  },
  {
    id: '2',
    name: "Tirolinas",
    photo: zip_lines,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintp raesentium magni",
    thermalSensation: "warmth"
  },
  {
    id: '3',
    name: "Rafting",
    photo: rafting,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesen tium magni",
    thermalSensation: "very hot"
  },
  {
    id: '4',
    name: "Piragüísmo",
    photo: canoeing,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpra esentium magni",
    thermalSensation: "very hot"
  },
  {
    id: '5',
    name: "Moto de agua",
    photo: jet_ski,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintp raesentium magni",
    thermalSensation: "very hot"
  },
  {
    id: '6',
    name: "Quad",
    photo: quad,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesen tium magni",
    thermalSensation: "warmth"
  },
  {
    id: '7',
    name: "Senderismo",
    photo: hiking,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpra esentium magni",
    thermalSensation: "cold"
  },
  {
    id: '8',
    name: "Ski",
    photo: ski,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintp raesentium magni",
    thermalSensation: "cold"
  },
  {
    id: '9',
    name: "Snowboard",
    photo: snowboard,
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesen tium magni",
    thermalSensation: "cold"
  }
] as TypeAdventure[];
