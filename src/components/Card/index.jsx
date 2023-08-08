import { useState, useEffect } from 'react';
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
                console.table(logements.length);
                setCard(logements);
                console.table(card);
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
                            <a
                                href="http://localhost:3000/APropos"
                                className={styles.cardA}
                            >
                                <span className={styles.cardText}>
                                    {rental.title}
                                </span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}

export default Card;
