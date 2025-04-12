import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx'; // ✅ 不要加 .tsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
