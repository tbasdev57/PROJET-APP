import {
  Code2,
  Database,
  Layout,
  Server,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  repoUrl: string;
  liveUrl?: string;
};

export type Skill = {
  icon: LucideIcon;
  label: string;
  items: string[];
};

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Application Web',
    description: 'Boutique en ligne avec gestion de panier, développée en TypeScript.',
    longDescription:
      "Projet de boutique en ligne développé en TypeScript, avec une gestion du panier d'achat. Le code source complet est disponible sur GitHub.",
    tags: ['TypeScript'],
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57/ts-shopping-cart',
  },
  {
    title: 'Tableau de Bord SaaS',
    category: 'Dashboard',
    description: "Application de suivi de finances personnelles, développée en TypeScript.",
    longDescription:
      "Tableau de bord développé en TypeScript pour suivre ses finances personnelles. Le code source complet est disponible sur GitHub.",
    tags: ['TypeScript'],
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57/ts-personal-finance',
  },
  {
    title: 'Application Mobile Fitness',
    category: 'Application Mobile',
    description: "Application mobile de suivi d'entraînement, développée avec React Native.",
    longDescription:
      "Application mobile développée avec React Native pour suivre ses séances d'entraînement et sa progression.",
    tags: ['React Native', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/12932334/pexels-photo-12932334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57',
  },
  {
    title: 'Site Vitrine Restaurant',
    category: 'Site Web',
    description: 'Site vitrine pour restaurant, réalisé avec Next.js et Tailwind CSS.',
    longDescription:
      "Site vitrine réalisé avec Next.js et Tailwind CSS pour présenter un restaurant en ligne. Le code source complet est disponible sur GitHub.",
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57/burger-restaurant',
  },
  {
    title: 'Plateforme de Blog',
    category: 'Application Web',
    description: 'Plateforme de blog développée en React et TypeScript.',
    longDescription:
      "Plateforme de blog développée en React et TypeScript. Le code source complet est disponible sur GitHub.",
    tags: ['React', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57/Blog',
  },
  {
    title: 'Outil de Gestion de Tâches',
    category: 'Productivité',
    description: 'Outil de gestion de tâches développé en React avec Tailwind CSS.',
    longDescription:
      "Outil de gestion de tâches développé en React et stylisé avec Tailwind CSS. Le code source complet est disponible sur GitHub.",
    tags: ['React', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/38888681/pexels-photo-38888681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    repoUrl: 'https://github.com/tbasdev57/Task_Flow',
  },
];

export const skills: Skill[] = [
  {
    icon: Code2,
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    icon: Layout,
    label: 'UI / UX',
    items: ['Figma', 'Design System', 'Framer Motion', 'Accessibilité'],
  },
  {
    icon: Server,
    label: 'Backend',
    items: ['Node.js', 'API REST', 'Edge Functions', 'Deno'],
  },
  {
    icon: Database,
    label: 'Base de données',
    items: ['PostgreSQL', 'Supabase', 'Prisma', 'Redis'],
  },
];

export const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

export const sectionIds = navLinks.map((link) => link.href.slice(1));

export const GITHUB_URL = 'https://github.com/tbasdev57';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/tayyib-basbunar-';
export const EMAIL = 'basbunartayyib@gmail.com';
