
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import UsinasProvider from './context/UsinasProvider';

import './trabalhoSTYLE.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <UsinasProvider>
        <App />
      </UsinasProvider>
    </HashRouter>
  </StrictMode>
);
