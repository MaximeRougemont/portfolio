const translations = {
  fr: {
    nav: {
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
    },
    projects: {
      title: "Mes projets",
      subtitle: "Une sélection de projets sur lesquels j'ai travaillé.",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Qui je suis et ce que je fais",
      p1: "Je suis <strong>Maxime DAMOUR ROUGEMONT</strong>, développeur passionné par la création d'applications web modernes et performantes.",
      p2: "J'aime transformer des idées en expériences numériques fluides, en utilisant les technologies les plus récentes. Mon objectif est de concevoir des solutions à la fois élégantes et fonctionnelles.",
      p3: "Quand je ne code pas, tu peux me trouver en train d'explorer de nouveaux frameworks, de contribuer à des projets open-source, ou de chercher l'inspiration pour mon prochain projet.",
      skillsTitle: "Compétences",
    },
    contact: {
      title: "Contact",
      subtitle: "Une question ou un projet ? N'hésitez pas à me contacter.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
    },
    projectCard: {
      viewProject: "Voir le projet →",
    },
    projectData: {
      featured: [
        { title: "Projet 1", description: "Une application web construite avec Astro et React." },
        { title: "Projet 2", description: "Un site vitrine performant et moderne." },
        { title: "Projet 3", description: "Une API RESTful développée en Node.js." },
      ],
      all: [
        { title: "Application de gestion", description: "Dashboard pour gérer les tâches et projets d'une équipe." },
        { title: "Site e-commerce", description: "Boutique en ligne avec panier et paiement Stripe." },
        { title: "Blog technique", description: "Blog avec Markdown, recherche full-text et RSS." },
        { title: "API REST", description: "API sécurisée avec authentification JWT." },
        { title: "Application mobile", description: "App de suivi de fitness avec React Native." },
        { title: "Portfolio", description: "Ce portfolio, construit avec Astro." },
      ],
    },
    footer: "Tous droits réservés.",
    themeAria: "Changer le thème",
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
    },
    projects: {
      title: "My Projects",
      subtitle: "A selection of projects I have worked on.",
    },
    about: {
      title: "About Me",
      subtitle: "Who I am and what I do",
      p1: "I'm <strong>Maxime DAMOUR ROUGEMONT</strong>, a developer passionate about crafting modern, high-performance web applications.",
      p2: "I love turning ideas into seamless digital experiences using the latest technologies. My goal is to design solutions that are both elegant and functional.",
      p3: "When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or looking for inspiration for my next project.",
      skillsTitle: "Skills",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a question or a project? Feel free to reach out.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    projectCard: {
      viewProject: "View the project →",
    },
    projectData: {
      featured: [
        { title: "Project 1", description: "A web application built with Astro and React." },
        { title: "Project 2", description: "A modern, performant showcase website." },
        { title: "Project 3", description: "A RESTful API built with Node.js." },
      ],
      all: [
        { title: "Management App", description: "Dashboard to manage team tasks and projects." },
        { title: "E-commerce Site", description: "Online store with cart and Stripe payment." },
        { title: "Tech Blog", description: "Blog with Markdown, full-text search and RSS." },
        { title: "REST API", description: "Secure API with JWT authentication." },
        { title: "Mobile App", description: "Fitness tracking app built with React Native." },
        { title: "Portfolio", description: "This portfolio, built with Astro." },
      ],
    },
    footer: "All rights reserved.",
    themeAria: "Toggle theme",
  },
} as const;

export type Lang = keyof typeof translations;
export type Translation = typeof translations.fr;

export function getTranslations(lang: Lang): Translation {
  return translations[lang] ?? translations.en;
}

export function detectLang(acceptLanguage?: string): Lang {
  if (!acceptLanguage) return "en";
  return acceptLanguage.startsWith("fr") ? "fr" : "en";
}
