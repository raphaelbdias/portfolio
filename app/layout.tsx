import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Raphael Dias", template: "%s - Raphael Dias" },
  description:
    "Decision Support Analyst portfolio focused on healthcare analytics, reporting, and data-informed decision support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#f8f8f7" />
      </head>
      <body>{children}</body>
    </html>
  );
}
