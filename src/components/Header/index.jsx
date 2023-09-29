import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

function Header() {
    return (
        <div className={styles.kasaHeader}>
            <Logo />
            <nav className={styles.headerNav}>
                <div className={styles.navLinkContainer}>
                    <NavLink to="/">Accueil</NavLink>
                </div>
                <div className={styles.navLinkContainer}>
                    <NavLink to="/APropos" className={styles.aProposLink}>
                        A Propos
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;
