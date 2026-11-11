import type { ComponentType } from 'react';
import { AboutPage } from '../pages/AboutPage';
import { CloudHostingPage } from '../pages/CloudHostingPage';
import { HomePage } from '../pages/HomePage';
import { LinuxVpsPage } from '../pages/LinuxVpsPage';
import { SharedHostingPage } from '../pages/SharedHostingPage';
import { WordPressHostingPage } from '../pages/WordPressHostingPage';
import { aboutSeo } from '../content/about';
import { cloudSeo } from '../content/cloud';
import { homeSeo } from '../content/home';
import { seo } from '../content/seo';
import type { SeoData } from '../content/types';

export interface RouteDefinition {
  key: string;
  path: string;
  output: string;
  Page: ComponentType;
  seo: SeoData;
}

export const routes: RouteDefinition[] = [
  { key: 'home', path: '/', output: 'index.html', Page: HomePage, seo: homeSeo },
  {
    key: 'cloud-hosting',
    path: '/cloud-hosting.html',
    output: 'cloud-hosting.html',
    Page: CloudHostingPage,
    seo: cloudSeo,
  },
  {
    key: 'about-us',
    path: '/about-us.html',
    output: 'about-us.html',
    Page: AboutPage,
    seo: aboutSeo,
  },
  {
    key: 'shared-hosting',
    path: '/shared-hosting.html',
    output: 'shared-hosting.html',
    Page: SharedHostingPage,
    seo: seo.sharedHosting,
  },
  {
    key: 'wordpress-hosting',
    path: '/wordpress-hosting.html',
    output: 'wordpress-hosting.html',
    Page: WordPressHostingPage,
    seo: seo.wordpressHosting,
  },
  {
    key: 'linux-vps-server',
    path: '/linux-vps-server.html',
    output: 'linux-vps-server.html',
    Page: LinuxVpsPage,
    seo: seo.linuxVps,
  },
];

export function getRoute(key: string): RouteDefinition | undefined {
  return routes.find((route) => route.key === key);
}
