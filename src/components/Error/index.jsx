import styles from './error.module.css';
function Error() {
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorTitle}>404</h1>
            <span className={styles.errorMain}>
                <span>Oups! La page que</span>
                <span> vous demandez n'existe pas.</span>
            </span>
            <a href="http://localhost:3000" className={styles.errorLink}>
                Retourner sur la page d'accueil
            </a>
        </div>
    );
}

export default Error;
