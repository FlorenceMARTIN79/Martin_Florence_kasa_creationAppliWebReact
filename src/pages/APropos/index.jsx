import styles from './aPropos.module.css';
import Collapse from '../../components/Collapse';
import aProposImg from '../../assets/aProposImg.png';

function APropos() {
    return (
        <div>
            <div>
                <header>
                    <img
                        src={aProposImg}
                        alt="montagnes"
                        className={styles.aProposImg}
                    />
                </header>
                <main>
                    <div>
                        <Collapse label="Fiabilité">
                            <p className={styles.collapseOpenContent}>
                                Les annonces postées sur Kasa garantissent une
                                fiabilité totale. Les photos sont conformes aux
                                logements, et toutes les informations sont
                                régulièrement vérifiées par nos équipes.
                            </p>
                        </Collapse>
                        <Collapse label="Respect">
                            <p className={styles.collapseOpenContent}>
                                La bienveillance fait partie des valeurs
                                fondatrices de Kasa. Tout comportement
                                discriminatoire ou de perturbation du voisinage
                                entraînera une exclusion de notre plateforme.
                            </p>
                        </Collapse>
                        <Collapse label="Service">
                            <p className={styles.collapseOpenContent}>
                                Nos équipes se tiennent à votre disposition pour
                                vous fournir une expérience parfaite. N'hésitez
                                pas à nous contacter si vous avez la moindre
                                question.
                            </p>
                        </Collapse>
                        <Collapse label="Sécurité">
                            <p className={styles.collapseOpenContent}>
                                La sécurité est la priorité de Kasa. Aussi bien
                                pour nos hôtes que pour les voyageurs, chaque
                                logement correspond aux critères de sécurité
                                établis par nos services. En laissant une note
                                aussi bien à l'hôte qu'au locataire, cela permet
                                à nos équipes de vérifier que les standards sont
                                bien respectés. Nous organisons également des
                                ateliers sur la sécurité domestique pour nos
                                hôtes.
                            </p>
                        </Collapse>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default APropos;
