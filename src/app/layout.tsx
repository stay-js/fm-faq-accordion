import type { Viewport } from 'next';
import { Work_Sans } from 'next/font/google';
import { cn } from '~/utils/cn';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'hsl(275, 100%, 97%)',
  colorScheme: 'light',
};

const workSans = Work_Sans({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin-ext'],
});

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="antialiased">
    <body
      className={cn(
        'bg-light-pink bg-[url("/background-pattern-mobile.svg")] bg-contain bg-no-repeat lg:bg-[url("/background-pattern-desktop.svg")]',
        workSans.className,
      )}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
