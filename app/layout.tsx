import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/feature/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
  description:
    "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
  keywords:
    "real estate visualization, 3D walkthrough, VR tours, drone cinematography, architectural rendering, construction videos",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/AML-FavIcon.png",
    apple: "/AML-FavIcon.png",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com"
  ),
  openGraph: {
    title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
    description:
      "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alliancemedialabs.com",
    siteName: "Alliance Media Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
    description:
      "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
    images: ["/og-image.jpg"],
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
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
