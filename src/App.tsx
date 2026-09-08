import { useEffect, useState, useCallback } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Layout,
  Server,
  Database,
  ArrowUpRight,
  ExternalLink,
  XCircle,
  Check,
  Sparkles,
  Phone,
  MapPin,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  features: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    category: 'Application Web',
    description:
      'Plateforme e-commerce complète avec panier, paiement Stripe et gestion de produits en temps réel.',
    longDescription:
      "Une plateforme e-commerce moderne construite avec React et Supabase. L'application inclut une gestion de produits en temps réel, un panier persistant, un tunnel de paiement Stripe sécurisé et un back-office d'administration. L'interface est entièrement responsive et optimisée pour les performances.",
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Panier persistant avec synchronisation en temps réel',
      'Paiement sécurisé via Stripe Checkout',
      "Panel d'administration pour la gestion des produits",
      'Recherche et filtrage avancés des produits',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
  {
    title: 'Tableau de Bord SaaS',
    category: 'Dashboard',
    description:
      'Dashboard analytique avec graphiques interactifs, gestion utilisateurs et authentification sécurisée.',
    longDescription:
      "Un tableau de bord SaaS complet avec authentification, gestion de rôles et visualisation de données en temps réel. Construit avec React, TypeScript et Recharts, il offre une expérience utilisateur fluide avec des graphiques interactifs, des métriques personnalisables et un système de notifications.",
    tags: ['React', 'TypeScript', 'Recharts', 'Supabase', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Authentification sécurisée avec gestion de rôles',
      'Graphiques interactifs et personnalisables',
      'Métriques en temps réel via WebSocket',
      'Export de rapports en PDF et CSV',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
  {
    title: 'Application Mobile Fitness',
    category: 'Application Mobile',
    description:
      "Suivi d'entraînement personnalisé avec programmes adaptatifs et statistiques de progression.",
    longDescription:
      "Une application mobile de fitness développée avec React Native et Expo. Elle propose des programmes d'entraînement adaptatifs, un suivi détaillé des performances, des statistiques visuelles de progression et des notifications de rappel. Le design est pensé pour une expérience mobile optimale.",
    tags: ['React Native', 'TypeScript', 'Expo', 'Node.js'],
    image:
      'https://images.pexels.com/photos/12932334/pexels-photo-12932334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      "Programmes d'entraînement adaptatifs",
      'Suivi des performances avec graphiques',
      'Notifications et rappels personnalisés',
      'Synchronisation des données dans le cloud',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
  {
    title: 'Site Vitrine Restaurant',
    category: 'Site Web',
    description:
      'Site web élégant avec menu interactif, système de réservation et galerie photos.',
    longDescription:
      "Un site vitrine moderne pour un restaurant haut de gamme, développé avec Next.js et Tailwind CSS. Il intègre un menu interactif, un système de réservation en ligne, une galerie photos élégante et une optimisation SEO complète. Le design met en valeur l'identité visuelle du restaurant.",
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    image:
      'https://images.pexels.com/photos/6327536/pexels-photo-6327536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Menu interactif avec filtrage par catégorie',
      'Système de réservation en temps réel',
      'Galerie photos avec lightbox',
      'Optimisation SEO et performances',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
  {
    title: 'Plateforme de Blog',
    category: 'Application Web',
    description:
      'CMS sur mesure avec éditeur Markdown, gestion de catégories et commentaires en temps réel.',
    longDescription:
      "Une plateforme de blog complète avec un CMS sur mesure, un éditeur Markdown enrichi, un système de catégories et de tags, ainsi que des commentaires en temps réel. Développée avec React et Supabase, elle offre une expérience d'écriture et de lecture fluide et moderne.",
    tags: ['React', 'TypeScript', 'Supabase', 'Markdown'],
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Éditeur Markdown avec aperçu en direct',
      'Système de catégories et tags',
      'Commentaires en temps réel',
      'Recherche full-text performante',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
  {
    title: 'Outil de Gestion de Tâches',
    category: 'Productivité',
    description:
      'Application de productivité avec drag-and-drop, étiquettes et collaboration en équipe.',
    longDescription:
      "Un outil de gestion de tâches moderne avec fonctionnalités de drag-and-drop, étiquettes colorées, deadlines et collaboration en équipe. L'application supporte les tableaux Kanban, les vues liste et calendrier, ainsi que les notifications en temps réel pour le travail en équipe.",
    tags: ['React', 'TypeScript', 'Tailwind', 'DnD'],
    image:
      'https://images.pexels.com/photos/38888681/pexels-photo-38888681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      'Tableau Kanban avec drag-and-drop fluide',
      'Vues liste, calendrier et timeline',
      'Collaboration en équipe en temps réel',
      'Étiquettes, deadlines et priorités',
    ],
    link: 'https://www.linkedin.com/in/tayyib-basbunar-',
  },
];

const skills = [
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

const navLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Tayyib<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 hover:scale-105"
        >
          Me contacter
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 mx-4 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow-delay" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          Disponible pour de nouvelles opportunités
        </div>

        <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
          Tayyib
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
            BASBUNAR
          </span>
        </h1>

        <p className="reveal mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Développeur Front End spécialisé en TypeScript, React et Next.js.
          Je crée des interfaces web modernes, performantes et accessibles.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-900 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Voir mes projets
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white border border-white/15 rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            Me contacter
          </a>
        </div>

        <div className="reveal mt-12 flex items-center justify-center gap-6">
          {[
            { icon: Github, href: 'https://github.com/tbasdev57', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/tayyib-basbunar-', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:basbunartayyib@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-3 text-slate-400 bg-white/5 border border-white/10 rounded-xl hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            À propos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Je conçois des interfaces web modernes avec TypeScript, React et Next.js.
          </h2>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              En tant que développeur Front End spécialisé en TypeScript, React et
              Next.js, je transforme des maquettes complexes en expériences
              numériques fluides, rapides et accessibles. Mon focus est sur la
              qualité du code, la performance et le souci du détail visuel.
            </p>
            <p>
              J'écris du code fortement typé avec TypeScript, construis des
              composants réutilisables avec React, et profite du rendu côté
              serveur de Next.js pour des applications optimisées en SEO et en
              vitesse de chargement. Curieux de nature, je me tiens constamment
              à jour sur les meilleures pratiques du secteur.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: '5+', label: "Années d'expérience" },
              { value: '30+', label: 'Projets réalisés' },
              { value: '15+', label: 'Clients satisfaits' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center md:text-left p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            Compétences
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ma stack technique
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Spécialisé en développement Front End avec TypeScript, React et Next.js.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={skill.label}
              className="reveal group p-7 bg-slate-800/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {skill.label}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-slate-400 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useBodyScrollLock(true);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-800 border border-white/10 rounded-3xl shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-900 rounded-full transition-all duration-200"
          aria-label="Fermer"
        >
          <XCircle className="w-6 h-6" />
        </button>

        <div className="relative h-56 md:h-64 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/30 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-2">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Fonctionnalités clés
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-full">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-all duration-200 hover:scale-105"
          >
            Voir le projet en direct
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            Projets
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Réalisations sélectionnées
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Cliquez sur un projet pour voir les détails, les fonctionnalités et
            les technologies utilisées.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <article
              key={project.title}
              onClick={() => openProject(project)}
              className="reveal group cursor-pointer bg-slate-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 text-xs font-medium text-cyan-300 bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-md text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-slate-900">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-slate-500 bg-white/5 border border-white/10 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProject} />
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-slate-400 mb-12">
            Vous avez un projet en tête ou une opportunité à discuter ?
            N'hésitez pas à me contacter, je vous réponds rapidement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'basbunartayyib@gmail.com',
                href: 'mailto:basbunartayyib@gmail.com',
              },
              {
                icon: Phone,
                label: 'Téléphone',
                value: '+33 7 83 07 25 40',
                href: 'tel:+33783072540',
              },
              {
                icon: MapPin,
                label: 'Localisation',
                value: 'Paris, France',
                href: 'https://maps.google.com/?q=Paris,France',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'Tayyib BASBUNAR',
                href: 'https://www.linkedin.com/in/tayyib-basbunar-',
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group p-6 bg-slate-800/50 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 text-cyan-400 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-sm text-slate-500">{label}</div>
                <div className="mt-1 text-sm font-medium text-white">{value}</div>
              </a>
            ))}
          </div>

          <a
            href="mailto:basbunartayyib@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-slate-900 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <Mail className="w-4 h-4" />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">
          Tayyib BASBUNAR — Développeur Front End
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/tbasdev57', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/tayyib-basbunar-', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:basbunartayyib@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
