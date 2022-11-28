import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'src/components/App';

const rootReactElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
