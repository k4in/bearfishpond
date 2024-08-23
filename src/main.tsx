import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './Routes';

createRoot(document.getElementById('bearfishpond')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
