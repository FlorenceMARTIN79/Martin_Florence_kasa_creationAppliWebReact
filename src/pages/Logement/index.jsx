import { useParams } from 'react-router-dom';
import styles from './logement.module.css';
import Slideshow from '../../components/Slideshow';

function Logement() {
    const { id } = useParams();

    if (1 == 1) {
        return (
            <div>
                <div>
                    <main>
                        <h1>Page Logement {id}</h1>
                        <Slideshow></Slideshow>
                    </main>
                </div>
            </div>
        );
    } else {
        return <span>No !</span>;
    }
}

export default Logement;
