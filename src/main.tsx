import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import items from './assets/items.json';
import Providers from './provider/Providers.tsx'; // Import the Providers component

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App items={items} />
    </Providers>
  </React.StrictMode>,
);
