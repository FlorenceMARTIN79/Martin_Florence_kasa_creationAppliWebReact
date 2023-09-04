import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

function Card() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('logements.json')
            .then(function (res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function (logements) {
                setCard(logements);
            })

            .catch(function (err) {
                console.log('erreur de récupération des données logement');
            });
    }, []);

    return (
        <main className={styles.homeMain}>
            <div className={styles.homeGallery}>
                {card.map((rental, index) => {
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
                                <span className={styles.cardText}>
                                    {rental.title}
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Card;
