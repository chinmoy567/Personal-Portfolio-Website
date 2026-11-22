import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description: site.intro,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.headline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary", title: `${site.name} | ${site.title}`, description: site.headline },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a363f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
