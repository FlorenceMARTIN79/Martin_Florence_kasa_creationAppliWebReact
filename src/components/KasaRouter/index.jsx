import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './kasaRouter.module.css';
import Home from '../../pages/Home';
import APropos from '../../pages/APropos';
import Logement from '../../pages/Logement';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../../components/Error';

function KasaRouter() {
    return (
        <Router>
            <Header className={styles.header} />
            <div className={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/APropos" element={<APropos />} />
                    <Route path="/Logement/:id" element={<Logement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default KasaRouter;
