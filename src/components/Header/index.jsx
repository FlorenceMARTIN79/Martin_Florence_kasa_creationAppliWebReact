import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="kasa-header">
            <img src={logo} alt="logo du site kasa" className="kasa-logo" />
        </div>
    );
}

export default Header;
