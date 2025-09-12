import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster, ToastProvider } from "./components/ui/toaster";
import "./globals.css";

// Using system font stack for better performance and reliability
const fontSans = {
  variable: '--font-sans',
  className: 'font-sans',
};

export const metadata: Metadata = {
  title: 'Tsague Russel | Full-Stack Developer',
  description: 'Full-Stack Developer & AI Enthusiast building modern web applications with cutting-edge technologies.',
  keywords: ['Full-Stack Developer', 'Web Development', 'React', 'TypeScript', 'Node.js', 'AI Enthusiast'],
  authors: [{ name: 'Tsague Russel' }],
  creator: 'Tsague Russel',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
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
};

// System font stack as fallback
const systemFontStack = {
  variable: '--font-system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${fontSans.variable} dark`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <div className="min-h-screen flex flex-col">
              <header className="sticky top-0 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800">
                <nav className="container mx-auto flex justify-between items-center py-5 px-6">
                  <a 
                    href="#home" 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
                  >
                    Tsague Russel
                  </a>
                  <ul className="hidden md:flex items-center space-x-8">
                    {['home', 'skills', 'projects', 'experience', 'contact', 'achievements'].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item}`} 
                          className="relative group font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all group-hover:w-full"></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </nav>
              </header>
              
              <main className="flex-1">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[100px]" />
                  <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[100px]" />
                </div>
                {children}
              </main>
              
              <footer className="py-8 border-t border-gray-800 mt-12">
                <div className="container mx-auto px-6 text-center">
                  <div className="flex justify-center space-x-6 mb-6">
                    {['github', 'linkedin', 'twitter', 'mail'].map((social) => (
                      <a 
                        key={social}
                        href={`#${social}`}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={social}
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Tsague Russel. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
620186153