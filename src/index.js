import React from 'react';
import ReactDOM from 'react-dom/client';

import { MemoryComponent } from './components/apps/MemoryComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryComponent />
  </React.StrictMode>
);


