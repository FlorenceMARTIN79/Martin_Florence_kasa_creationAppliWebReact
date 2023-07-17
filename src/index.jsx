import React from 'react';
import styles from './App.module.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <div className={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/APropos" element={<APropos />} />
                    <Route path="/Logement" element={<Logement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </React.StrictMode>
);
