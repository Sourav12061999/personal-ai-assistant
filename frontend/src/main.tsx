import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Context from './Features/Context/index.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Context>
  <React.StrictMode>
    <App />
      </React.StrictMode>
    </Context>
  </MantineProvider>,
)
