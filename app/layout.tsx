import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "KDI",
  description: "A personal, online storage bin",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/dino.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/dino.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
