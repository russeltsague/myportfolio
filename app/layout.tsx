"use client";

import { useState } from 'react';
import { metadata, viewport } from './metadata';
import { ThemeProvider } from "./components/theme-provider";
import { Toaster, ToastProvider } from "./components/ui/toaster";
import FloatingParticles from "./components/FloatingParticles";
import MagneticCursor from "./components/MagneticCursor";
import "./globals.css";

// Using system font stack for better performance and reliability
const fontSans = {
  variable: '--font-sans',
  className: 'font-sans',
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                  <div className="relative md:hidden">
                    <button 
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                      aria-label="Toggle menu"
                      aria-expanded={isMenuOpen}
                    >
                      {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      )}
                    </button>
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                        {['home', 'skills', 'projects', 'experience', 'contact', 'achievements'].map((item) => (
                          <a
                            key={item}
                            href={`#${item}`}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </header>
              
              <main className="flex-1 relative">
                <FloatingParticles />
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
                  <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
                  <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[80px] animate-pulse" />
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
          <MagneticCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
620186153