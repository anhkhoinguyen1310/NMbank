import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { getLoggedInUser } from "@/lib/action/user.actions";
import { redirect } from "next/navigation";


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})


export const metadata: Metadata = {
  title: "NMBank",
  description: "NMBank is a modern banking platform for everyone",
  icons: {
    icon: '/icon/logo.svg'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
