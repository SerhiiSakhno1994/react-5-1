import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Navigation = () => (
  <nav>
    <NavLink to="/" className={setActive}>
      Головна
    </NavLink>
    <NavLink to="/authors" className={setActive}>
      Автори
    </NavLink>
    <NavLink to="/books" className={setActive}>
      Книги
    </NavLink>
    <NavLink to="/table" className={setActive}>
      Таблиця
    </NavLink>
  </nav>
);

export default Navigation;
