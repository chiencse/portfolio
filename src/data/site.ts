import type { ImageMetadata } from 'astro';
import geekup from '@/assets/logos/geekup.png';
import hcmut from '@/assets/logos/hcmut.png';
import ebkstore from '@/assets/images/ebkstore.png';
import hospital from '@/assets/images/hopital.png';

// Everything on the home page is driven from this file — edit here, not in the components.

export const profile = {
  name: 'Nông Minh Chiến',
  shortName: 'Chiến',
  handle: 'chiencse',
  role: 'Software Engineer',
  company: 'VNG',
  tagline: 'Software Engineering, AI Integration.',
  intro:
    'I design and build backend systems that stay fast, secure and easy to change — and the web apps that sit on top of them.',
  about: [
    'I am a Software Engineer at VNG, specialising in backend system design and optimisation, with a Computer Science foundation from Ho Chi Minh City University of Technology (HCMUT).',
    'Most of my work lives on the server: modelling the domain, shaping APIs, picking the right storage, and keeping services observable once they are in production. I lean on Clean Architecture, Domain-Driven Design and Hexagonal Architecture to keep codebases readable as they grow.',
  ],
  location: 'Ho Chi Minh City, Vietnam',
  email: 'minhchien662004@gmail.com',
  github: 'https://github.com/chiencse',
  facebook: 'https://www.facebook.com/chienv.minhn/',
  cv: 'cv.pdf',
};

export const facts: { label: string; value: string }[] = [
  { label: 'Currently', value: 'Software Engineer @ VNG' },
  { label: 'University', value: 'HCMUT — Computer Science' },
  { label: 'GPA', value: '3.6 / 4.0' },
  { label: 'Focus', value: 'Backend · System design' },
  { label: 'Based in', value: 'Ho Chi Minh City' },
];

export type Experience = {
  role: string;
  company: string;
  /** Company logo; without one a monogram of the company name is shown. */
  logo?: ImageMetadata;
  period: string;
  current?: boolean;
  summary: string;
  /** Products or projects worked on, shown as labelled tags. */
  products?: string[];
  stack?: string[];
  highlights?: string[];
};

// Newest first.
export const experiences: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'VNG',
    period: 'Jun 2026 — Present',
    current: true,
    summary: 'Building internal platforms at VNG.',
    products: ['Operation Tool', 'AI Composer', 'Portal Service'],
  },
  {
    role: 'Product Backend Intern',
    company: 'Geek Up',
    logo: geekup,
    period: 'Jan 2025 — Jun 2025',
    summary:
      'Backend for OGeek 2.0, an internal product for employee connection and competency management.',
    stack: ['NestJS', 'PostgreSQL', 'Redis', 'Docker', 'AWS S3', 'Prometheus', 'Grafana'],
    highlights: [
      'Analysed business and operational requirements, mapped current workflows and proposed new ones aligned with stakeholder needs.',
      'Designed and documented the system architecture with the C4 Model, applying Clean Architecture, DDD and Hexagonal Architecture.',
      'Built RESTful APIs on PostgreSQL and Redis with attention to data consistency, scalability and performance.',
      'Deployed and monitored services with Docker, Prometheus and Grafana, and set up data backup strategies.',
      'Worked in an Agile squad with product design, frontend and ops — backlog planning, reviews, retros and iteration milestones.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'HCMUT Digital Transformation (Chuyển Đổi Số)',
    logo: hcmut,
    period: 'Jun 2024 — Sep 2024',
    summary:
      'A web application for managing the city student union: members, event scheduling and participation tracking.',
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'TypeORM', 'Next.js'],
    highlights: [
      'Designed and implemented RESTful APIs with Node.js and NestJS, and optimised backend performance.',
      'Integrated PostgreSQL through TypeORM, keeping data consistent and secure.',
    ],
  },
];

export type Project = {
  name: string;
  /** Small label above the name, e.g. "Bachelor's thesis". */
  kind?: string;
  description: string;
  /** What I personally built, shown as bullets. */
  contributions?: string[];
  tags: string[];
  image?: ImageMetadata;
  /** Terminal-style lines drawn as the cover when there is no screenshot. */
  terminal?: string[];
  repo?: string;
  demo?: string;
  links?: { label: string; href: string }[];
};

// The first project is shown as the large featured card.
export const projects: Project[] = [
  {
    name: 'EduRPA',
    kind: "Bachelor's thesis · HCMUT",
    description:
      'An open-source Robotic Process Automation platform built for the education sector: design automation workflows as BPMN, then run them as robots against everyday tools.',
    contributions: [
      'Built the text-to-BPMN pipeline that turns a plain-language process description into a BPMN flow, using LangGraph, entity extraction, hybrid retrieval (BM25 + embeddings over ChromaDB) and Gemini.',
      'Contributed to the NestJS backend, the Next.js workflow designer and the serverless robot runtime.',
    ],
    tags: ['LangGraph', 'RAG', 'FastAPI', 'NestJS', 'Next.js', 'bpmn-js', 'AWS'],
    terminal: [
      '"Send email with Gmail after creating a Google Sheet"',
      '→ start → create sheet → send gmail → end',
    ],
    repo: 'https://github.com/rpa-for-edu/pipeline_text_to_bpmn',
    demo: 'https://edu-rpa-frontend-sap-indol.vercel.app',
    links: [{ label: 'Organisation', href: 'https://github.com/rpa-for-edu' }],
  },
  {
    name: 'eBKStore',
    description:
      'A B2C e-commerce platform for electronics: product catalogue, secure payments, customer reviews and order tracking.',
    tags: ['NestJS', 'Next.js', 'MySQL', 'Tailwind', 'Azure'],
    image: ebkstore,
    repo: 'https://github.com/chiencse/electronics_store',
  },
  {
    name: 'CS Compiler',
    description:
      'A custom programming language and its compiler, covering the full pipeline: lexing, parsing, semantic checks, intermediate representation and JVM bytecode generation.',
    tags: ['Python', 'ANTLR', 'Jasmin', 'Compiler design'],
    terminal: ['source code', '→ lexer → parser → checker → codegen → Jasmin'],
    repo: 'https://github.com/chiencse/CS_Compiler',
  },
  {
    name: 'Hospital Management System',
    description:
      'A web platform for hospital operations — appointment booking, medical records, and staff and resource management.',
    tags: ['React', 'Node.js', 'Firebase', 'Tailwind'],
    image: hospital,
    repo: 'https://github.com/chiencse/hopital_ass',
  },
];

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  details: string;
  year: number;
  summary: string;
  url: string;
  code?: string;
};

export const publications: Publication[] = [
  {
    title: 'Applying Robotic Process Automation (RPA) in Education: A Platform',
    authors: ['Thai-Minh Truong', 'Chien Nong Minh', 'Khanh Nguyen Minh', 'Vinh Huynh'],
    venue: 'SN Computer Science',
    details: 'Vol. 7, Issue 3, Article 242 · Springer Nature',
    year: 2026,
    summary:
      'Introduces EduRPA, an open-source RPA platform designed for the specific needs of educational institutions, where generic RPA tools fall short.',
    url: 'https://doi.org/10.1007/s42979-026-04830-y',
    code: 'https://github.com/rpa-for-edu',
  },
];

/** How my name appears in author lists, so it can be highlighted. */
export const authorName = 'Chien Nong Minh';

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Go'] },
  { group: 'Backend', items: ['NestJS', 'Node.js', 'FastAPI', 'Spring Boot', 'REST APIs'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'AI & LLM', items: ['LangGraph', 'LangChain', 'RAG', 'ChromaDB', 'Gemini'] },
  { group: 'Cloud & Ops', items: ['Docker', 'AWS', 'Azure', 'Prometheus', 'Grafana', 'Git'] },
  { group: 'Practices', items: ['Clean Architecture', 'DDD', 'Hexagonal', 'C4 Model', 'Agile'] },
  { group: 'Automation', items: ['RPA', 'BPMN'] },
];
