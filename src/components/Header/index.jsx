import styles from './header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
    return (
        <div className={styles.kasaHeader}>
            <Logo />
            <nav className={styles.headerNav}>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>
    );
}

export default Header;
