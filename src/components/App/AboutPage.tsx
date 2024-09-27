import React from 'react';

function AboutPage() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>MAQUAIRE Jérémy</h1>
        <p>
          Je suis{' '}
          <span
            className="typed"
            data-typed-items="Développeur Full Stack, Freelance"
          />
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/profile.php?id=100094957867296"
            className="facebook"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            href="https://github.com/JeremyMAQUAIRE?tab=repositories"
            className="github"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://linkedin.com/in/jérémy-maquaire"
            className="linkedin"
          >
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
