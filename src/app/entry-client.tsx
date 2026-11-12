import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/sections.css';
import '../styles/article.css';
import '../styles/auth.css';
import '../styles/motion.css';
import { initMotion } from '../lib/motion';
import { CurrencyProvider } from './currency';
import { getRoute } from './routes';

const pageKey = document.body.dataset.page ?? 'home';
const route = getRoute(pageKey);
const container = document.getElementById('root');

if (route && container) {
  const tree = (
    <StrictMode>
      <CurrencyProvider>
        <route.Page />
      </CurrencyProvider>
    </StrictMode>
  );

  // Prerendered pages arrive with markup to attach to; the Vite dev shell is
  // empty, so mounting is the only correct start there (hydrating an empty
  // container logs a mismatch).
  if (container.firstElementChild) {
    hydrateRoot(container, tree);
  } else {
    createRoot(container).render(tree);
  }

  initMotion();
}
