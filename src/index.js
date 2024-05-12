import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App/App';
import { ThemeProvider } from './App/providers/ThemeContext/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);