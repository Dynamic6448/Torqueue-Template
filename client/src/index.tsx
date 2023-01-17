import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import './index.css';
import './fonts/Market_Deco.ttf';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Dashboard />} />
        </Routes>
    </Router>,
);
