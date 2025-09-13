import type { Metadata, Viewport } from 'next';
import './globals.css';

// Using system font stack for better performance and reliability
const fontSans = {
  variable: '--font-sans',
  className: 'font-sans',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tsaguerussel.com'),
  title: 'Tsague Russel | Full-Stack Developer',
  description: 'Full-Stack Developer & AI Enthusiast building modern web applications with cutting-edge technologies.',
  keywords: ['Full-Stack Developer', 'Web Development', 'React', 'TypeScript', 'Node.js', 'AI Enthusiast'],
  authors: [{ name: 'Tsague Russel' }],
  creator: 'Tsague Russel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tsaguerussel.com',
    title: 'Tsague Russel | Full-Stack Developer',
    description: 'Full-Stack Developer & AI Enthusiast building modern web applications with cutting-edge technologies.',
    siteName: 'Tsague Russel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tsague Russel | Full-Stack Developer',
    description: 'Full-Stack Developer & AI Enthusiast building modern web applications with cutting-edge technologies.',
    creator: '@tsaguerussel',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light',
};

import { ThemeProvider } from "./components/theme-provider";
import { Toaster, ToastProvider } from "./components/ui/toaster";
import FloatingParticles from "./components/FloatingParticles";
import MagneticCursor from "./components/MagneticCursor";
import ClientLayout from "./client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
620186153