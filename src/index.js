import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Tabs from './Tabs'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Title() {
  useEffect(() => {
    document.title = 'Calculator';
  }, []);
}

root.render(
  <React.StrictMode>
    <Title />
    <Tabs />
    <App />
  </React.StrictMode>
);