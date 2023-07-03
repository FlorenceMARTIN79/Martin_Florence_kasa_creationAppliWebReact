import styles from './footer.module.css';
import logoWhite from '../../assets/logo/logoWhite.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className={styles.kasaFooter}>
            <Link to="/">
                <img
                    src={logoWhite}
                    alt="logo du site kasa"
                    className="kasaLogo"
                />
            </Link>
            <span className={styles.kasaFooterText}>
                @ 2020 Kasa. All rights reserved
            </span>
        </div>
    );
}

export default Footer;
