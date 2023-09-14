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

    console.log(currentRental);
    console.table(currentRental);

    if (currentRental !== undefined) {
        const rentalPictures = currentRental.pictures;
        console.table(rentalPictures);

        return (
            <div>
                <main>
                    <Slideshow data={rentalPictures} />
                    <h1>{currentRental.title}</h1>
                    <Collapse />
                </main>
            </div>
        );
    } else {
        return <Error />;
    }
}

export default Logement;
