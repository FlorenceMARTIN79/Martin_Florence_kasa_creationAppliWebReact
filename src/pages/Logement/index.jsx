import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import styles from './logement.module.css';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Error from '../../components/Error';

function Logement() {
    const { id } = useParams();

    const { data, error } = useFetch(`http://localhost:3000/logements.json`);

    const dataArr = Array.from(data);

    let currentRental = dataArr.find((elt) => elt.id === id);

    if (currentRental !== undefined) {
        const rentalPictures = currentRental.pictures;

        const tags = currentRental.tags;
        const listTags = tags.map((tag, index) => {
            return (
                <span className={styles.tag} key={`${tag}-${index}`}>
                    {tag}
                </span>
            );
        });

        const equipments = currentRental.equipments;
        const listEquipments = equipments.map((equipment, index) => {
            return (
                <span
                    className={styles.equipment}
                    key={`${equipment}-${index}`}
                >
                    {equipment}
                </span>
            );
        });

        return (
            <div>
                <main>
                    <Slideshow data={rentalPictures} />
                    <div className={styles.rentalPresentation}>
                        <div className={styles.rentalInformation}>
                            <h1 className={styles.rentalTitle}>
                                {currentRental.title}
                            </h1>
                            <span className={styles.rentalLocation}>
                                {currentRental.location}
                            </span>
                            <span className={styles.rentalTags}>
                                {listTags}
                            </span>
                        </div>
                        <div className={styles.rentalHostInformation}>
                            <div className={styles.rentalHost}>
                                <div className={styles.hostName}>
                                    {currentRental.host.name}
                                </div>
                                <img
                                    src={currentRental.host.picture}
                                    alt="propriétaire de la location"
                                    className={styles.hostPhoto}
                                />
                            </div>
                            <div className={styles.rentalRating}>
                                {currentRental.rating}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rentalDetails}>
                        <div className={styles.rentalDetailBlock}>
                            <Collapse label="Descripton">
                                <p className={styles.descriptionDetail}>
                                    {currentRental.description}
                                </p>
                            </Collapse>
                        </div>
                        <div className={styles.rentalDetailBlock}>
                            <Collapse label="Equipements">
                                <p className={styles.equipmentsDetail}>
                                    {listEquipments}
                                </p>
                            </Collapse>
                        </div>
                    </div>
                </main>
            </div>
        );
    } else {
        return <Error />;
    }
}

export default Logement;
