import type { SeoData } from './types';

/**
 * Presentation data for the three WHMCS client-area entry pages.
 *
 * These pages are deliberately dumb: the form endpoints, field names, HTTP
 * methods and outbound links are the legacy ones, so nothing about the auth
 * flow changes. Only the markup (and therefore the look) is new.
 */
export interface AuthField {
  label: string;
  /** Legacy `name` attribute; some legacy fields have none, and none is added. */
  name?: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
  required?: boolean;
  /** Rendered as `type="Password"` in legacy sign-up markup. */
  legacyType?: string;
}

export interface AuthSubmit {
  kind: 'submit' | 'link';
  label: string;
  /** Used when the legacy call to action is an anchor, not a form button. */
  href?: string;
}

export interface AuthPageData {
  seo: SeoData;
  output: string;
  /** Legacy `<h3 class="title">` text; the pages have no H1 in legacy markup. */
  title: string;
  columns: 1 | 2;
  form: { action?: string; method?: 'post' | 'get' };
  fields: AuthField[];
  rememberMe?: { name: string; id: string; label: string };
  forgotLink?: { label: string; href: string };
  submit: AuthSubmit;
  footer: { text: string; label: string; href: string };
}

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zedgehost Pakistan',
  url: 'https://zedgehost.com/',
  logo: 'https://zedgehost.com/assets/img/logo.png',
  description:
    'Web hosting, domain registration, VPS, cloud hosting, business email, and website security services in Pakistan.',
  areaServed: 'Pakistan',
  sameAs: ['https://zedgehost.com/'],
};

function serviceSchema(serviceType: string, url: string, description: string): unknown[] {
  return [
    ORGANIZATION,
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType,
      provider: {
        '@type': 'Organization',
        name: 'Zedgehost Pakistan',
        url: 'https://zedgehost.com/',
      },
      areaServed: 'Pakistan',
      url,
      description,
    },
  ];
}

export const loginPage: AuthPageData = {
  seo: {
    title: 'Login | ZedgeHost Pakistan Hosting Portal',
    description:
      'Secure login for Zedgehost Pakistan customers to manage hosting, domains, and support tickets.',
    canonical: 'https://my.zedgehost.com/index.php?rp=/login',
    robots: 'noindex, follow',
    schema: [
      serviceSchema(
        'Login Zedgehost Pakistan',
        'https://zedgehost.com/login.html',
        'Secure login for Zedgehost Pakistan customers to manage hosting, domains, and support tickets.',
      ),
    ],
  },
  output: 'login.html',
  title: 'Secure Client Login',
  columns: 1,
  form: { action: 'https://my.zedgehost.com/dologin.php', method: 'post' },
  fields: [
    {
      label: 'Email',
      name: 'username',
      type: 'email',
      placeholder: 'enter email here',
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'enter password here',
      required: true,
    },
  ],
  rememberMe: { name: 'rememberme', id: 'checkbox', label: 'Remember Me' },
  forgotLink: {
    label: 'Forgot Password ?',
    href: 'https://my.zedgehost.com/index.php?rp=/password/reset',
  },
  submit: { kind: 'submit', label: 'Login Now' },
  footer: {
    text: "Don't have an account?",
    label: 'Create a New Account',
    href: 'https://my.zedgehost.com/register.php',
  },
};

export const signUpPage: AuthPageData = {
  seo: {
    title: 'Sign Up | ZedgeHost Pakistan Hosting Plans',
    description:
      'Create a Zedgehost Pakistan account to buy hosting, register domains, and manage your online services.',
    canonical: 'https://my.zedgehost.com/register.php',
    robots: 'noindex, follow',
    schema: [
      serviceSchema(
        'Sign Up Zedgehost Pakistan',
        'https://zedgehost.com/sign-up.html',
        'Create a Zedgehost Pakistan account to buy hosting, register domains, and manage your online services.',
      ),
    ],
  },
  output: 'sign-up.html',
  title: 'Secure Client Register',
  columns: 2,
  // Legacy markup has neither an action nor named inputs: the visible button is
  // a link to the WHMCS register endpoint, so nothing is posted from this page.
  form: {},
  fields: [
    { label: 'Enter Name', type: 'text', placeholder: 'Enter Name' },
    { label: 'Enter Email', type: 'text', placeholder: 'Enter email' },
    { label: 'Company Name', type: 'text', placeholder: 'Company Name' },
    { label: 'Enter Country', type: 'text', placeholder: 'Enter Country' },
    { label: 'Enter State', type: 'text', placeholder: 'Enter State' },
    { label: 'Enter Address', type: 'text', placeholder: 'Enter Address' },
    { label: 'Enter City', type: 'text', placeholder: 'Enter City' },
    { label: 'Enter Zip Code', type: 'text', placeholder: 'Enter Zip Code' },
    {
      label: 'Enter Password',
      type: 'password',
      placeholder: 'Enter Password',
      legacyType: 'Password',
    },
  ],
  submit: {
    kind: 'link',
    label: 'Register on Client Portal',
    href: 'https://my.zedgehost.com/register.php',
  },
  footer: {
    text: 'Already have an account?',
    label: 'Login Now',
    href: 'https://my.zedgehost.com/index.php?rp=/login',
  },
};

export const forgotPasswordPage: AuthPageData = {
  seo: {
    title: 'Reset Password | ZedgeHost Pakistan',
    description:
      'Recover your Zedgehost Pakistan account password and regain access to your website services.',
    canonical: 'https://my.zedgehost.com/index.php?rp=/password/reset',
    robots: 'noindex, follow',
    schema: [
      serviceSchema(
        'Reset Password Zedgehost Pakistan',
        'https://zedgehost.com/forgot-password.html',
        'Recover your Zedgehost Pakistan account password and regain access to your website services.',
      ),
    ],
  },
  output: 'forgot-password.html',
  title: 'Reset Password',
  columns: 1,
  form: { action: 'https://my.zedgehost.com/index.php?rp=/password/reset', method: 'post' },
  fields: [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'enter email here',
      required: true,
    },
  ],
  submit: {
    kind: 'link',
    label: 'Reset on Client Portal',
    href: 'https://my.zedgehost.com/index.php?rp=/password/reset',
  },
  footer: {
    text: "Don't have an account?",
    label: 'Create a New Account',
    href: 'https://my.zedgehost.com/register.php',
  },
};

export const authPages = [loginPage, signUpPage, forgotPasswordPage];
