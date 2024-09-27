import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';

interface NavProps {
  isOpenNav: boolean;
  setIsOpenNav: (isOpen: boolean) => void;
}

const Nav = ({ isOpenNav, setIsOpenNav }: NavProps) => {
  const classNav = isOpenNav ? 'nav nav_open' : 'nav nav_closed';

  const handleClickLink = () => {
    setIsOpenNav(false);
  };

  // Array of link labels
  const links = [
    { label: 'Accueil', to: '/', id: 1 },
    { label: 'A propos', to: '/about', id: 2 },
    { label: 'PortFolio', to: '/portfolio', id: 3 },
    { label: 'Tarif', to: '/pricing', id: 4 },
    { label: 'Contact', to: '/contact', id: 5 },
  ];

  return (
    <>
      {/* Nav pour le mobil --- Start */}
      <nav className={classNav}>
        {links.map((link, index) => (
          <Link
            key={link.id}
            className="nav_link"
            style={{ '--n': index + 1 } as React.CSSProperties}
            to={link.to}
            onClick={handleClickLink}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* Nav pour le mobil --- End */}
      {/* Nav pour le laptop --- Start */}
      <nav className="nav_laptop">
        {links.map((link) => (
          <NavLink
            key={link.id}
            className={({ isActive }) =>
              isActive
                ? 'nav_laptop_link nav_laptop_link_active'
                : 'nav_laptop_link'
            }
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {/* Nav pour le laptop --- End */}
    </>
  );
};

export default Nav;
