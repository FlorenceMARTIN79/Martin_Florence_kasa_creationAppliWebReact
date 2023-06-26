import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="kasa-header">
                <img src={logo} alt="logo du site kasa" className="kasa-logo" />
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>
    );
}

export default Header;
