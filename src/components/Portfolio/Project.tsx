import { motion } from 'framer-motion';
import './Portfolio.scss';
import { Card } from 'react-bootstrap';
import { Eye } from 'react-feather';
import { useEffect, useState } from 'react';

interface IProject {
  title: string;
  description: string;
  siteLink: string;
  screen: string;
  techno: string;

  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  offset: number;
}

const Project = ({
  title,
  description,
  isHovered,
  siteLink,
  screen,
  techno,
  onHoverStart,
  onHoverEnd,
  offset,
}: IProject) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let width;
  let opacity;

  if (screenWidth < 1204) {
    width = '98%';
    opacity = 1;
  } else if (isHovered) {
    width = '100%';
    opacity = 1;
  } else {
    width = '40%';
    opacity = 0.5;
  }

  return (
    <motion.div
      className="project-container"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{ scale: 1 }}
      animate={{
        opacity,
        scale: isHovered ? 1 : 1,
        width,
        x: isHovered ? 0 : offset, // Décale les cartes non survolées
      }}
      transition={{ duration: 0.3 }}
    >
      <Card className="project-container_card">
        <Card.Header className="project-container_card_header">
          <img
            src={screen}
            alt={`${title} screen`}
            className="project-container_card_header_image"
          />
          <Card.Title className="project-container_card_header_title">
            {title}
          </Card.Title>
        </Card.Header>
        <Card.Body className="project-container_card_body">
          <Card.Text className="project-container_card_body_text">
            {description.split('\n').map((line) => (
              <span key={line}>
                {line}
                <br /> {/* Add a line break between lines */}
              </span>
            ))}
          </Card.Text>
          <Card.Text className="project-container_card_body_text">
            <span> Technologies : {techno} </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="project-container_card_footer">
          <motion.a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-container_card_footer_a"
            whileHover={{ scale: 1.1, rotate: 5, x: 10 }} // Animation au survol
            transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Contrôle la fluidité de l'animation
          >
            <Eye /> Voir plus...
          </motion.a>
        </Card.Footer>
      </Card>
    </motion.div>
  );
};

export default Project;
