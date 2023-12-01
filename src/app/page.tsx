import type { Metadata } from 'next';
import { Accordion } from './accordion';

const title = 'Frontend Mentor - FAQ accordion solution';
const description =
  'This is a solution to the FAQ accordion challenge on Frontend Mentor. Built with Next.js and Tailwind CSS.';

export const metadata: Metadata = {
  metadataBase: new URL('https://faq-accordion.znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords:
    'frontend mentor, frontend, mentor, fem, faq accordion, faq, accordion, challenge, next.js, nextjs, react, headlessui, tailwind, tailwindcss',

  title,

  applicationName: title,

  description,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://faq-accordion.znagy.hu',
    title: description,
    siteName: title,
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title: title,
    description,
  },

  icons: {
    icon: '/favicon-32x32.png',
  },
};

const Page = () => (
  <main className="grid min-h-screen w-screen place-content-center">
    <Accordion />
  </main>
);

export default Page;
