import './globals.css';
import UserProvider from './context/user';
import { Inter } from 'next/font/google';
import MainLayout from './Layouts/MainLayout';
import Footer from './Layouts/includes/Footer';

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
        <main>
          <UserProvider>{children}</UserProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
