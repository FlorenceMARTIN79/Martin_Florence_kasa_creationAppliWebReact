import styles from './header.module.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <main className={styles.kasaHeader}>
            <Link to="/">
                <img
                    src={logo}
                    alt="logo du site kasa"
                    className={styles.kasaLogo}
                />
            </Link>
            <nav className={styles.headerNav}>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </main>
    );
}

export default Header;
