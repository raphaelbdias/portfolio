import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raphaelbdias.com"),
  title: { default: "Raphael Dias", template: "%s - Raphael Dias" },
  description:
    "Decision Support Analyst portfolio focused on healthcare analytics, reporting, and data-informed decision support.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Raphael Dias",
    description:
      "Analytics, BI reporting, and decision-support services for teams that need clearer metrics and better decisions.",
    url: "https://raphaelbdias.com",
    siteName: "Raphael Dias",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Raphael Dias logo",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Raphael Dias",
    description:
      "Analytics, BI reporting, and decision-support services for teams that need clearer metrics and better decisions.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f8f8f7" />
      </head>
      <body>{children}</body>
    </html>
  );
}
