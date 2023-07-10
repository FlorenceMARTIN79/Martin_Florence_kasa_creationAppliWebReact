import { useEffect } from 'react';
import styles from './card.module.css';

function Card() {
    useEffect(() => {
        fetch('logements.json')
            .then(function (res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function (logements) {
                console.table(logements);
            })
            .catch(function (err) {
                console.log('erreur de récupération des données logement');
            });
    });
}

export default Card;
