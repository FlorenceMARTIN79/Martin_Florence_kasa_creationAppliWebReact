import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
    return (
        <div className={styles.kasaHeader}>
            <Logo />
            <nav className={styles.headerNav}>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/APropos">A Propos</NavLink>
            </nav>
        </div>
    );
}

export default Header;
