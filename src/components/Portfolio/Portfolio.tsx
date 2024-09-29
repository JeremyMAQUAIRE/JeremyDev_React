import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Project from './Project';
import './Portfolio.scss';
import '../AboutPage/AboutPage.scss';

import supportUpr from '../../assets/screen_support_upr.jpg';
import cfdtIliad from '../../assets/screen_cfdt_iliad.jpg';
import institutLBeauty from '../../assets/screen_institut_lbeauty.jpg';
import gochasse from '../../assets/screen_gochasse.jpg';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(1);

  const projects = [
    {
      id: 1,
      screen: supportUpr,
      title: 'Support Upr',
      description:
        "Ce projet a été crée dans le but d'aider les techniciens terrain dans leurs tâches quotidiennes.\n Voici une liste non exhausitive des fonctionnalités : \n - Gestion de profil avec connexion et mot de passe, acces selon les droits.\n - Gestion des stocks avec commande.\n - Gestion d'une base de donnée SQL.\n - Création et envoi de PDF par mail personnalisé apres vérification à la soumission.\n - Application responsive s'adaptant au format du support (PC ou smartphone).",
      siteLink: 'https://support-upr.fr',
      techno: 'Symfony, Bootstrap, GitHub, MySQL, Application Web',
    },
    {
      id: 2,
      title: 'CFDT Iliad',
      description:
        "Ce projet a été crée dans le but de présenter les activités d'une section syndicale au sein d'une entreprise leader de la télécommuncation.\n Voici une liste non exhausitive des fonctionnalités : \n - Gestion de profil avec connexion et mot de passe, acces selon les droits à un forum.\n - Gestion d'une newletter.\n - Formulaire de contact.\n - Application responsive s'adaptant au format du support (PC ou smartphone).",
      siteLink: 'https://cfdt-iliad.fr/',
      screen: cfdtIliad,
      techno: 'Wordpress, Elementor',
    },
    {
      title: 'Institut LBeauty',
      description:
        "Ce projet a été crée dans le but de présenter un institut de beauté.\n Voici une liste non exhausitive des fonctionnalités : \n - Création d'un site vitrine personnalisé.\n - Mise en place de Woocommerce.\n - Gestion de bon cadeau avec paiement en ligne.\n - Application responsive s'adaptant au format du support (PC ou smartphone).",
      id: 3,
      siteLink: 'https://institutlbeauty.fr/',
      screen: institutLBeauty,
      techno: 'Wordpress, Elementor, Woocommerce, Stripe',
    },
    {
      title: 'GoChasse',
      description: 'Ce projet est en cours de développement',
      id: 4,
      siteLink: '#',
      screen: gochasse,
      techno: 'React, API, Directus, GitHub, Application Web',
    },
  ];

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>PortFolio - Jérémy Maquaire</title>
        <meta
          name="description"
          content="Bienvenue sur la page de présentation de Jérémy Maquaire, développeur web."
        />
        <meta
          name="keywords"
          content="Développeur web, Jérémy Maquaire, solutions innovantes, freelancing"
        />
        <meta name="author" content="Jérémy Maquaire" />
        <meta name="language" content="fr-FR" />

        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Portfolio - Jérémy Maquaire" />
        <meta
          property="og:description"
          content="Découvrez les projets réalisés par Jérémy Maquaire, un développeur web passionné."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://jeremy-dev63.fr/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portfolio de Jérémy Maquaire" />
      </Helmet>
      <div className="portfolio-container_header">
        <h2 className="aboutPage_title">PORTFOLIO</h2>
        <p className="aboutPage_text">
          Découvrez mon portfolio de développement web, une vitrine de mes
          compétences et réalisations. Avec plusieurs années d&apos;expérience,
          je crée des sites web dynamiques et esthétiques, utilisant les
          dernières technologies et standards du web. Explorez mes projets
          variés, allant de la conception d&apos;interfaces utilisateur à
          l&apos;intégration de fonctionnalités avancées. Mon portfolio démontre
          mon engagement envers l&apos;excellence et l&apos;innovation dans
          chaque projet.
        </p>
      </div>
      <div className="portfolio-container_projects">
        {projects.map((project) => {
          let offset = 0;

          if (hoveredCard === null) {
            offset = 0; // Pas de carte survolée
          } else if (project.id < hoveredCard) {
            offset = -20; // Carte à gauche de la carte survolée
          } else {
            offset = 20; // Carte à droite de la carte survolée
          }

          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              siteLink={project.siteLink}
              screen={project.screen}
              techno={project.techno}
              isHovered={hoveredCard === project.id}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              offset={offset}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
