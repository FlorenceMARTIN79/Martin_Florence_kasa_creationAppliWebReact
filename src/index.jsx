import React from 'react';
import styles from './App.module.css';
import ReactDOM from 'react-dom/client';
import KasaRouter from './components/KasaRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <KasaRouter />
    </React.StrictMode>
);
