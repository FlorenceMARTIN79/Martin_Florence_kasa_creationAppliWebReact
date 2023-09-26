import { useFetch } from '../../utils/hooks';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

function Card() {
    const { data } = useFetch(`http://localhost:3000/logements.json`);

    let dataArr = Array.from(data);

    return (
        <main className={styles.homeMain}>
            <div className={styles.homeGallery}>
                {dataArr.map((rental, index) => {
                    return (
                        <div className={styles.cardStyle} key={rental.id}>
                            <Link
                                to={`/Logement/${rental.id}`}
                                className={styles.cardA}
                            >
                                <img
                                    src={rental.cover}
                                    alt="logement"
                                    className={styles.rentalCover}
                                />
                                <div className={styles.cartTextContainer}>
                                    <span className={styles.cardText}>
                                        {rental.title}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Card;
