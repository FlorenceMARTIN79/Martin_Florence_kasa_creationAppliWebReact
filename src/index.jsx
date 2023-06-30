import React from 'react';
import styles from './App.module.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/APropos" element={<APropos />} />
                <Route path="/Logement" element={<Logement />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
