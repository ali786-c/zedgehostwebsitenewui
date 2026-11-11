import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/layout.css';
import '../styles/components.css';
import '../styles/sections.css';
import '../styles/blog.css';
import { CurrencyProvider } from './currency';
import { getRoute } from './routes';

const pageKey = document.body.dataset.page ?? 'home';
const route = getRoute(pageKey);
const container = document.getElementById('root');

if (route && container) {
  hydrateRoot(
    container,
    <StrictMode>
      <CurrencyProvider>
        <route.Page />
      </CurrencyProvider>
    </StrictMode>,
  );
}
