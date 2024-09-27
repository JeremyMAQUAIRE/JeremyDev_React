import { useState } from 'react';
import { Menu } from 'react-feather';
import logo from '../../assets/logo.jpg';
import './Header.scss';
import Nav from '../Nav/Nav';

const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const handleClickOpenMenu = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header_logo" />
      <p className="header_name">Jérémy DEV 63</p>
      <Menu className="header_menu" onClick={handleClickOpenMenu} />
      <Nav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
    </header>
  );
};

export default Header;
