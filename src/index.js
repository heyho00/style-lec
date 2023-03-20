import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function index() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

index();