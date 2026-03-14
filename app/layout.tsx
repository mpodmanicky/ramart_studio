import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ramart Studio | Architektonické štúdio Banská Bystrica",
    template: "%s | Ramart Studio",
  },
  description:
    "Architektonické štúdio v Banskej Bystrici. Špecializujeme sa na návrhy rodinných domov, interiérov, rekonštrukcie a urbanizmus. Autorizovaný architekt Ing.arch. Martin Rajčan.",
  keywords: [
    "architektúra",
    "interiér",
    "dizajn",
    "Banská Bystrica",
    "architektonické štúdio",
    "rodinné domy",
    "rekonštrukcie",
    "novostavby",
    "urbanizmus",
  ],
  authors: [{ name: "Ramart Studio" }],
  creator: "Ramart Studio",
  publisher: "Ramart Studio",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.ramartstudio.sk",
    siteName: "Ramart Studio",
    title: "Ramart Studio | Architektonické štúdio Banská Bystrica",
    description:
      "Architektonické štúdio v Banskej Bystrici. Špecializujeme sa na návrhy rodinných domov, interiérov, rekonštrukcie a urbanizmus.",
    images: [
      {
        url: "/ramart_logo.png",
        width: 1200,
        height: 630,
        alt: "Ramart Studio Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
