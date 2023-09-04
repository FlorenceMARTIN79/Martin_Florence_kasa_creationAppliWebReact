import { useParams } from 'react-router-dom';
import styles from './logement.module.css';
import homeBannerImg from '../../assets/homeBannerImg.png';
import Slideshow from '../../components/Slideshow';

function Logement() {
    return (
        <div>
            <div>
                <main>
                    <h1>Page Logement</h1>
                    <Slideshow></Slideshow>
                </main>
            </div>
        </div>
    );
}

export default Logement;
