import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#0F172A',
            color: '#fff',
            fontFamily: 'Fira Code, monospace',
            fontWeight: 'bold',
            borderRadius: '0.5rem',
            border: '1px solid #1E293B',
          },
          success: {
            iconTheme: {
              primary: '#00FF80',
              secondary: '#0F172A',
            },
          },
          error: {
            iconTheme: {
              primary: '#FF0080',
              secondary: '#0F172A',
            },
          }
        }}
      />
    </BrowserRouter>
  </StrictMode>
);