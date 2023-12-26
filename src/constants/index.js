import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  service,
  nimovie,
  reactjs,
  redux,
  tailwind,
  git,
  admindashboard,
  hangman,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React/NextJS Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Javascript Internship",
    company_name: "KZI",
    icon: service,
    iconBg: "#383E56",
    date: "Sep 2022 - December 2022",
    points: [
      "Developing layouts and websites using Vanilla Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designersand other developers to create high-quality responsive designs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "3D Development Internship",
    company_name: "Online Mentorship",
    icon: service,
    iconBg: "#E6DEDD",
    date: "Aug 2023 , Sep 2023",
    points: [
      "Developing and maintaining creative designs using Three.js, Framer Motion and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Private Contract",
    icon: service,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nima proved me wrong.",
    name: "Ali",
    designation: "CFO",
    company: "Roodak",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Amir",
    designation: "Founder",
    company: "LingoLearn",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "After Nima optimized our website, the performance increased by 30%. We can't thank them enough!",
    name: "HamidReza",
    designation: "Designer",
    company: "Finoland",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Nimovie",
    description:
      "Web-based platform that allows users to search and manage Recent Movies from all over the world .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: nimovie,
    source_code_link: "https://github.com/Nima-Moradi1/NiMovie",
  },
  {
    name: "Admin Dashboard",
    description:
      "a react admin dashboard that enables users to have at-a-glance access to the crucial information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "Persian Hangman",
    description:
      "you have 6 guesses to save a person from hanging ! try to save your friend or he will die!...",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hangman,
    source_code_link: "https://github.com/Nima-Moradi1/guess-or-kill",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
