// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "Raphael Dias", template: "%s • Raphael Dias" },
  description: "Decision Support Analyst & Automation Specialist at Health Sciences North",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts – Silkscreen */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon – your Silkscreen "RD" */}
        <link rel="icon" href="./logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#05B084" />
      </head>

      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}