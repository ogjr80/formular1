import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "F1 Dashboard",
  description: "Explore the world of Formula 1 racing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans">
        <nav className="bg-white dark:bg-secondary shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto" src="/f1-logo.svg" alt="F1 Logo" />
                  <span className="ml-2 text-xl font-bold text-primary">F1 Dashboard</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/seasons" className="text-secondary dark:text-accent hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                    Seasons
                  </Link>
                  <Link href="/drivers" className="text-secondary dark:text-accent hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-300">
                    Drivers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="bg-white dark:bg-secondary shadow-md mt-12">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © 2024 F1 Dashboard. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}