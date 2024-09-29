import { Helmet } from 'react-helmet';
import './AboutPage.scss';
import { ArrowRight } from 'react-feather';
import logo from '../../assets/logo.jpg';

const AboutPage = () => {
  return (
    <section className="aboutPage">
      <Helmet>
        <title>A Propos - Jérémy Maquaire</title>
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

        {/* Open Graph tags */}
        <meta property="og:title" content="A Propos - Jérémy Maquaire" />
        <meta
          property="og:description"
          content="Découvrez Jérémy Maquaire, un développeur web passionné offrant des solutions innovantes."
        />
        <meta property="og:image" content="assets/img/logo.jpg" />
        <meta property="og:url" content="https://jeremy-dev63.fr/a_propos" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <h2 className="aboutPage_title">A propos</h2>
        <p className="aboutPage_text">
          Je valorise la créativité et la collaboration pour concevoir des
          solutions innovantes. Je suis adaptable, passionné et curieux, aime
          résoudre les problèmes avec rigueur. Je crée des expériences web
          intuitives, accessibles et performantes en utilisant les dernières
          technologies pour satisfaire les utilisateurs et les clients.
        </p>
        <p className="aboutPage_text">
          Je suis membre d&apos;un club de tennis, où je pratique régulièrement
          ce sport et participe à l&apos;animation de mon village via une
          association festive.
        </p>
      </div>
      <div className="aboutPage_meta">
        <div className="aboutPage_meta_logo">
          <img
            src={logo}
            alt="Logo de la sociéte Jeremy Dev 63"
            className="aboutPage_meta_logo_icon"
          />
        </div>
        <div className="aboutPage_meta_description">
          <h3 className="aboutPage_meta_description_title">
            Développeur Full Stack
          </h3>
          <p className="aboutPage_meta_description_info">
            J&apos;ai créé mon entreprise de développement pour concrétiser ma
            passion pour la technique et offrir des solutions innovantes aux
            entreprises. Je voulais pouvoir exercer ma créativité et ma maîtrise
            technique tout en répondant aux besoins croissants du marché.
          </p>
          <div>
            <div>
              <ul className="aboutPage_meta_description_info_ul1">
                <li className="aboutPage_meta_description_info_li">
                  <ArrowRight className="aboutPage_meta_description_info_li_arrow" />{' '}
                  <strong className="aboutPage_meta_description_info_li_strong">
                    Téléphone:
                  </strong>{' '}
                  <span>07.68.50 40.95</span>
                </li>
                <li className="aboutPage_meta_description_info_li">
                  <ArrowRight className="aboutPage_meta_description_info_li_arrow" />
                  <strong className="aboutPage_meta_description_info_li_strong">
                    Mail:
                  </strong>{' '}
                  <span>info@jeremy-dev63.fr</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="aboutPage_meta_description_info_ul2">
                <li className="aboutPage_meta_description_info_li">
                  <ArrowRight className="aboutPage_meta_description_info_li_arrow" />
                  <strong className="aboutPage_meta_description_info_li_strong">
                    Ville:
                  </strong>{' '}
                  <span>Montaigut en Combraille, 63</span>
                </li>
                <li className="aboutPage_meta_description_info_li">
                  <ArrowRight className="aboutPage_meta_description_info_li_arrow" />
                  <strong className="aboutPage_meta_description_info_li_strong">
                    Freelance:
                  </strong>{' '}
                  <span>A distance et sur site </span>
                </li>
              </ul>
            </div>
          </div>
          <p className="aboutPage_text">
            Mon entreprise me permet de réaliser mes projets personnels, de
            collaborer avec des clients variés et de relever de nouveaux défis
            chaque jour. C&apos;est une source d&apos;épanouissement et
            d&apos;accomplissement professionnel qui me permet de vivre ma
            passion au quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
