import styles from './error.module.css';
function Error() {
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorTitle}>404</h1>
            <span className={styles.errorMain}>
                Oups! La page que <br />
                vous demandez n'existe pas.
            </span>
            <a href="http://localhost:3000" className={styles.errorLink}>
                Retourner sur la page d'accueil
            </a>
        </div>
    );
}

export default Error;
