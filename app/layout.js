import MainLayout from './Layouts/MainLayout';
import Footer from './Layouts/includes/Footer';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'eBay Clone',
  description: 'eBay Clone',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
