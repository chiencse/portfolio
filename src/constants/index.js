import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  hcmut,
  hopital,
  jobit,
  tripguide,
  threejs,
  geekup,
  postgre,
  python,
  mysql,
  java,
  golang,
  nest,
  django,
  nextjs,
  azurecloud,
  ebkstore,
  aws,
  springboot,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data ",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Computer Science",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Golang",
    icon: golang,
  },
  {
    name: "Js & TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Nest JS",
    icon: nest,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
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
  {
    name: "azure cloud",
    icon: azurecloud,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
];

const experiences = [
  {
    title: "CHUYỂN ĐỔI SỐ HCMUT - Backend Developer",
    company_name: "Ho Chi Minh University of Technology",
    icon: hcmut,
    iconBg: "#383E56",
    date: "Jun 2024 - September 2024",
    points: [
      "Objective: To develop a web application that streamlines the management of the city’s student union, enabling efficient member management, event scheduling, and participation tracking.",
      "Techonogies: Frontend: Next.js | Backend: NestJS | Database: PostgreSQL | TypeORM",
      "Designed and implemented RESTful APIs using Node.js and NestJS, developed features, and optimized the performance of the backend system.",
      "Integrated the PostgreSQL database with TypeORM, ensuring data consistency and security.",
    ],
  },
  {
    title: "Product Backend - Intern",
    company_name: "Geek Up Company",
    icon: geekup,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Jun 2025",
    points: [
      "Objective: To support the development of OGeek 2.0, an internal product for employee connection management, focusing on backend architecture, competency management, and process optimization.",
      "Technologies: NestJS | PostgreSQL | Docker | Redis | AWS S3 | Prometheus | Grafana",
      "Analyzed business and operational requirements, mapped current workflows, and proposed updated workflows aligned with stakeholder needs.",
      "Designed and documented system architecture using C4 Model and applied modern practices such as Clean Architecture, Domain-Driven Design, and Hexagonal Architecture.",
      "Developed and integrated RESTful APIs with PostgreSQL and Redis, ensuring data consistency, scalability, and performance optimization.",
      "Deployed and monitored backend services using Docker, Prometheus, and Grafana; set up data backup strategies for reliability.",
      "Collaborated closely with product design, frontend, and ops teams in Agile squads, participating in backlog planning, reviews, retrospectives, and delivering iteration milestones.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "CS_Compiler",
    description:
      "A custom programming language and compiler project that covers the full pipeline: from lexical and syntax analysis to semantic checking, intermediate representation, and code generation. The project demonstrates expertise in compiler design, programming language theory, and low-level code generation.",
    tags: [
      {
        name: "antlr",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "jasmin",
        color: "orange-text-gradient",
      },
      {
        name: "compiler-design",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace this with the actual image variable or path
    source_code_link: "https://github.com/chiencse/CS_Compiler.git",
  },
  {
    name: "Hospital Management System",
    description:
      "A comprehensive web-based platform designed to streamline hospital operations, enabling patients to book appointments, access medical records, and connect with healthcare providers. The system also supports staff and resource management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hopital, // Replace this with the actual image variable or path
    source_code_link: "https://github.com/",
  },

  {
    name: "eBKStore - B2C",
    description:
      "A dynamic e-commerce platform offering a seamless online shopping experience for electronic products. Features include detailed product catalogs, secure payment gateways, customer reviews, and order tracking for a modern and efficient shopping solution.",
    tags: [
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Azure Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: ebkstore, // Replace with the actual image variable or path
    source_code_link: "https://github.com/chiencse/electronics_store", // Replace with the actual source code link
  },
];

export { services, technologies, experiences, testimonials, projects };
