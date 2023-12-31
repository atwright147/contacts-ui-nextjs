import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Notifications } from '../components/Notification/Notifications';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <app-spinner></app-spinner>
        <app-notifications></app-notifications>
        <app-context-menu></app-context-menu> */}
        <Notifications />
        {children}
      </body>
    </html>
  )
}
