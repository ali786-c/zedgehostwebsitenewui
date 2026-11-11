import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { TopBar } from './TopBar';
import { WhatsAppFloat } from './WhatsAppFloat';

export function Layout({ currentPath, children }: { currentPath: string; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header currentPath={currentPath} />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
