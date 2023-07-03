import styles from './header.module.css';
import logoColor from '../../assets/logo/logoColor.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <main className={styles.kasaHeader}>
            <Link to="/">
                <img
                    src={logoColor}
                    alt="logo du site kasa"
                    className="kasaLogo"
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
