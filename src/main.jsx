import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Reset from './css/Reset.js';
import Style from './css/Style.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Style />
    <App />
  </React.StrictMode>,
)
