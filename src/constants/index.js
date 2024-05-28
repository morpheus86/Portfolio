import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  noble,
  clonebnb,
  assetcare,
  movie,
  nyeusi,
  flatbush,
  noblelogo,
  amount,
  CCD,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Mentor / Team leader",
    icon: prototyping,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Covariant",
    icon: flatbush,
    iconBg: "#333333",
    date: "Sep 2017 - Feb 2019",
  },
  {
    title: "Full Stack Engineer",
    company_name: "NobleIndustries",
    icon: noble,
    iconBg: "#333333",
    date: "June 2019 - Nov 2021",
  },
  {
    title: "Sr.Software Engineer",
    company_name: "Amount",
    icon: amount,
    iconBg: "#333333",
    date: "June 2022 - Apr 2023",
  },
  {
    title: "Lead Developer",
    company_name: "Campost Consulting and Development",
    icon: CCD,
    iconBg: "#333333",
    date: "Oct 2023 - May 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Noble",
    description:
      "Application is designed for ecommerce purpose with the ability to sell merchandises",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "red-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "gray-text-gradient",
      },
    ],
    image: noblelogo,
    repo: "https://github.com/morpheus86/ndstry",
  },
  {
    id: "project-2",
    name: "Clonebnb",
    description:
      "Mobile first Web Application that allows us to create a user, be able to add a house, its descriptions, upload the house pictures, keep track of the houses you have and the house you have booked.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: clonebnb,
    repo: "https://github.com/morpheus86/clonebnb",
  },
  {
    id: "project-3",
    name: "Assetcare",
    description: "This is a single-page calculator app built with React",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: assetcare,
    repo: "https://github.com/morpheus86/AssetCare.git",
  },
  {
    id: "project-4",
    name: "Movie Metro",
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
  },
  {
    id: "project-5",
    name: "Nyeusi Fest Site",
    description:
      "This is a demo concert website for a music festival called Nyeusi.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
  },
];

export { services, technologies, experiences, projects };
