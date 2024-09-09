import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | PlayPicks",
    default: "PlayPicks",
  },
  description: "Elevate your betting experience.",
  authors: [
    { name: "Favour Oghenekowho", url: "https://newtonfav.xyz" },
    {},
    {},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white bg-primary-500 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 grid">
          <main className="mx-auto w-full overflow-x-hidden">{children}</main>
        </div>
      </body>
    </html>
  );
}
