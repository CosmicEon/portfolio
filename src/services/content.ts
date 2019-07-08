import { ReactComponent as angular2 } from "../assets/icons/angular2.svg";
import { ReactComponent as css3 } from "../assets/icons/css3.svg";
import { ReactComponent as express } from "../assets/icons/express.svg";
import { ReactComponent as html5 } from "../assets/icons/html5.svg";
import { ReactComponent as javascirpt } from "../assets/icons/javascirpt.svg";
import { ReactComponent as jquery } from "../assets/icons/jquery.svg";
import { ReactComponent as typescript } from "../assets/icons/typescript.svg";

import project_1 from "../assets/images/projects/project_1.jpg";

export enum ProjectGroups {
  TelerikAcademy = "Telerik Academy",
  MotionSoftware = "Motion Software",
  ADSuisse = "ADSuisse"
}

const skills = [
  {
    name: "HTML5",
    icon: html5
  },
  {
    name: "CSS3",
    icon: css3
  },
  {
    name: "JavaScirpt",
    icon: javascirpt
  },
  {
    name: "jQuery",
    icon: jquery
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "Angular 2",
    icon: angular2
  },
  {
    name: "Express",
    icon: express
  }
];

const projects = [
  {
    id: 1,
    imgSrc: project_1,
    group: ProjectGroups.TelerikAcademy,
    name: "Minesweeper game",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minesweeper game - written in JavaScript, made as single-page application.",
    repo: "asd1",
    liveLink: "adsasd1"
  },
  {
    id: 2,
    imgSrc: project_1,
    group: ProjectGroups.TelerikAcademy,
    name: "Minesweeper game 2",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minesweeper game - written in JavaScript, made as single-page application.",
    repo: "asd2",
    liveLink: "adsasd2"
  },
  {
    id: 3,
    imgSrc: project_1,
    group: ProjectGroups.MotionSoftware,
    name: "Minesweeper game 3",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minesweeper game - written in JavaScript, made as single-page application.",
    repo: "asd3",
    liveLink: "adsasd3"
  },
  {
    id: 4,
    imgSrc: project_1,
    group: ProjectGroups.MotionSoftware,
    name: "Minesweeper game 4",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minesweeper game - written in JavaScript, made as single-page application.",
    repo: "asd4",
    liveLink: "adsasd4"
  },
  {
    id: 5,
    imgSrc: project_1,
    group: ProjectGroups.ADSuisse,
    name: "Minesweeper game 5",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Minesweeper game - written in JavaScript, made as single-page application.",
    repo: "asd5",
    liveLink: "adsasd5"
  }
];

const content = { skills, projects };

export default content;
