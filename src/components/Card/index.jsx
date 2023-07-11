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

    console.table(card);

    return (
        <ul>
            {card.map((rental, index) => (
                <li key={`${rental.title}-${index}`}>{rental.title}</li>
            ))}
        </ul>
    );
}

export default Card;
