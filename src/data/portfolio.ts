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
    description: 'Démo interactive de boutique : catalogue, filtres et panier.',
    longDescription: 'Démonstration interactive de boutique en ligne avec données fictives.',
    tags: ['React', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Tableau de Bord SaaS',
    category: 'Dashboard',
    description: 'Démo interactive de suivi financier et de visualisation de données.',
    longDescription: 'Démonstration financière utilisant uniquement des transactions fictives.',
    tags: ['TypeScript'],
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Application Mobile Fitness',
    category: 'Application Mobile',
    description: 'Démo responsive de suivi de séances et de progression sportive.',
    longDescription: 'Démonstration web responsive des fonctionnalités d’une application fitness.',
    tags: ['React', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/12932334/pexels-photo-12932334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Site Vitrine Restaurant',
    category: 'Site Web',
    description: 'Démo interactive de carte de restaurant et de sélection de plats.',
    longDescription: 'Démonstration fictive de site restaurant, sans réservation réelle.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Plateforme de Blog',
    category: 'Application Web',
    description: 'Démo de blog avec recherche, filtres et lecture d’articles.',
    longDescription: 'Démonstration de blog avec articles d’exemple.',
    tags: ['React', 'TypeScript'],
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Outil de Gestion de Tâches',
    category: 'Productivité',
    description: 'Démo interactive pour créer, modifier et organiser des tâches.',
    longDescription: 'Démonstration de gestion de tâches avec données locales temporaires.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/38888681/pexels-photo-38888681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
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
