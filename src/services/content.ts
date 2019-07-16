import { ReactComponent as angular2 } from "../assets/icons/angular2.svg";
import { ReactComponent as css3 } from "../assets/icons/css3.svg";
import { ReactComponent as express } from "../assets/icons/express.svg";
import { ReactComponent as html5 } from "../assets/icons/html5.svg";
import { ReactComponent as javascirpt } from "../assets/icons/javascirpt.svg";
import { ReactComponent as jquery } from "../assets/icons/jquery.svg";
import { ReactComponent as typescript } from "../assets/icons/typescript.svg";

import project_1 from "../assets/images/projects/project_1.jpg";
import project_4 from "../assets/images/projects/project_4.jpg";

import blog_1 from "../assets/images/blog/blog_1.jpg";

export enum ProjectGroups {
  TelerikAcademy = "Telerik Academy",
  MotionSoftware = "Motion Software",
  ADSuisse = "ADSuisse"
}

export interface Replay {
  user: string;
  date: string;
  message: string;
}

export interface Comment {
  id: number;
  user: string;
  email: string;
  date: string;
  message: string;
  replayes: Replay[];
}

export interface BlogPost {
  id: number;
  date: string;
  views: number;
  title: string;
  imgSrc: string;
  content: string[];
  comments: Comment[];
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
    imgSrc: project_4,
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
    imgSrc: project_4,
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

const blogPosts = [
  {
    id: 1,
    date: new Date().toDateString(),
    views: 34,
    title: "Astronomy Binoculars A Great Alternative",
    imgSrc: blog_1,
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: [
      {
        id: 1,
        user: "Krasen Ilkov",
        email: "",
        date: new Date().toDateString(),
        message: "Never say goodbye till the end comes! 1",
        replayes: [
          {
            user: "Krasen Ilkov",
            date: new Date().toDateString(),
            message: "Never say goodbye till the end comes! 1.1"
          },
          {
            user: "Krasen Ilkov",
            date: new Date().toDateString(),
            message: "Never say goodbye till the end comes! 1.2"
          }
        ]
      },
      {
        id: 2,
        user: "Krasen Ilkov",
        email: "",
        date: new Date().toDateString(),
        message: "Never say goodbye till the end comes! 2",
        replayes: []
      },
      {
        id: 3,
        user: "Krasen Ilkov",
        email: "",
        date: new Date().toDateString(),
        message: "Never say goodbye till the end comes! 3",
        replayes: [
          {
            user: "Krasen Ilkov",
            date: new Date().toDateString(),
            message: "Never say goodbye till the end comes! 3.1"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    date: new Date().toDateString(),
    views: 45,
    imgSrc: blog_1,
    title: "2 Astronomy Binoculars A Great Alternative",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: []
  },
  {
    id: 3,
    date: new Date().toDateString(),
    views: 12,
    imgSrc: blog_1,
    title: "3 Astronomy Binoculars A Great Alternative",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: []
  },
  {
    id: 4,
    date: new Date().toDateString(),
    views: 74,
    imgSrc: blog_1,
    title: "4 Astronomy Binoculars A Great Alternative",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: []
  },
  {
    id: 5,
    date: new Date().toDateString(),
    views: 36,
    imgSrc: blog_1,
    title: "5 Astronomy Binoculars A Great Alternative",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: []
  },
  {
    id: 6,
    date: new Date().toDateString(),
    views: 96,
    imgSrc: blog_1,
    title: "6 Astronomy Binoculars A Great Alternative",
    content: [
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed",
      "Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed"
    ],
    comments: []
  }
];

const content = { skills, projects, blogPosts };

export default content;
