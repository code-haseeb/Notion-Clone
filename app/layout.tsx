import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "A place where you can boast your Productivity by 5 Times",
  icons: {
    icon: [
      {
        media: "(prefered-color-scheme:light)",
        url: "./logo.svg",
        href: "./logo.svg",
      },
      {
        media: "(prefered-color-scheme:dark)",
        url: "./logo-dark.svg",
        href: "./logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
