import { Facebook, GitHub, Linkedin } from 'react-feather';
import { Helmet } from 'react-helmet';
import './HomePage.scss';

const HomePage = () => {
  return (
    <section className="home-page">
      <Helmet>
        <title>Accueil - Jérémy Maquaire</title>
        <meta
          name="description"
          content="Bienvenue sur la page d'accueil de Jérémy Maquaire, développeur web."
        />
        <meta
          name="keywords"
          content="Développeur web, Jérémy Maquaire, solutions digitales, création de sites"
        />
        <meta name="author" content="Jérémy Maquaire" />
        <meta name="language" content="fr-FR" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Accueil - Jérémy Maquaire" />
        <meta
          property="og:description"
          content="Découvrez le portfolio et les projets de Jérémy Maquaire, développeur web passionné."
        />
        <meta property="og:image" content="assets/img/logo.jpg" />
        <meta property="og:url" content="https://jeremy-dev63.fr" />
        <meta property="og:type" content="website" />
      </Helmet>

      <p className="home-page_head">
        <h1 className="home-page_head_title">MAQUAIRE Jérémy</h1>
        <p className="home-page_head_subtitle">
          Je suis <span className="home-page_head_subtitle_span typewriter" />
        </p>
      </p>
      <div className="home-page_social-links">
        <a
          href="https://www.facebook.com/profile.php?id=100094957867296"
          className="home-page_social-links_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="home-page_social-links_icon_facebook" />
        </a>
        <a
          href="https://github.com/JeremyMAQUAIRE?tab=repositories"
          className="home-page_social-links_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="home-page_social-links_icon_github" />
        </a>
        <a
          href="https://linkedin.com/in/jérémy-maquaire"
          className="home-page_social-links_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="home-page_social-links_icon_linkedin" />
        </a>
      </div>
    </section>
  );
};

export default HomePage;
