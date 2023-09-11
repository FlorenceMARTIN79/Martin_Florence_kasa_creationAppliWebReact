/*import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [card, setCard] = useState({});

    useEffect(() => {
        fetch(url)
            .then(function (res) {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(function (logements) {
                setCard(logements);
                console.log(logements);
            })

            .catch(function (err) {
                console.log('erreur de récupération des données logement');
            });
        if (!url) return;

        setLoading(true);

        async function logements() {
            try {
                const response = await fetch(url);

                const card = await response.json();

                setCard(logements);
            } catch (err) {
                console.log(err);

                setError(true);
            } finally {
                setLoading(false);
            }
        }

        logements();
    }, [url]);

    return { isLoading, card, error };
    }, []);

    return [card];
}*/

import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
                setError(true);
                alert(
                    'Erreur de chargement des données. Nous vous invitons à vérifier votre connexion internet et à vous reconnecter ultérieurement'
                );
            }
        }
        fetchData();
    }, [url]);
    return { data, error };
}
