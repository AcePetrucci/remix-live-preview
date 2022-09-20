import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BoxMultipleOrderWords } from './components/Advanced/OrderWords/stories/examples/BoxMultipleWords';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BoxMultipleOrderWords />
  </React.StrictMode>
);
