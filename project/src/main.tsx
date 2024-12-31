import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { init as initEmailJS } from '@emailjs/browser';
import App from './App.tsx';
import './index.css';
import { EMAIL_CONFIG } from './utils/constants';

// Initialize EmailJS
initEmailJS(EMAIL_CONFIG.PUBLIC_KEY);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);