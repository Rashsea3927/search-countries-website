import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Search Countris Website',
  description: 'Search for countries and get information about them.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${nunitoSans.variable} font-nunito antialiased`}>
        <Header />
        <main className='pt-6 md:pt-12 min-h-[calc(100vh-80px)] bg-neutral-100 dark:bg-blue-800'>
          {children}
        </main>
      </body>
    </html>
  );
}
