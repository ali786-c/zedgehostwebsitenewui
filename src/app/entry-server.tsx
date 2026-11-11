import { renderToString } from 'react-dom/server';
import type { RouteDefinition } from './routes';
import { CurrencyProvider } from './currency';
import { renderHead } from '../lib/seo';

export function renderRoute(route: RouteDefinition): { head: string; markup: string } {
  const markup = renderToString(
    <CurrencyProvider>
      <route.Page />
    </CurrencyProvider>,
  );

  return { head: renderHead(route.seo), markup };
}
