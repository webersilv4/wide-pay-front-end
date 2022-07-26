import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './routes';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <Router />
        <Footer />
    </React.StrictMode>
);
