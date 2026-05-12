import type { Metadata } from "next";
import Script from "next/script";
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://alliancemedialabs.com"
  ),
  openGraph: {
    title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
    description:
      "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alliancemedialabs.com",
    siteName: "Alliance Media Labs",
    images: [
      {
        url: "/images/services/3d-walkthrough-videos/1.jpg",
        width: 1200,
        height: 630,
        alt: "Alliance Media Labs — Real Estate Visualization Company India",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alliance Media Labs | Creative Tech & Branding Company for Real Estate",
    description:
      "Alliance Media Labs partners with real estate brands to design immersive visuals, digital ecosystems, and impactful brand experiences.",
    images: ["/images/services/3d-walkthrough-videos/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Ahrefs Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="X3h/UFK3d+U8h2m7qR1Xbg"
          async
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBV5K3KE82"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DBV5K3KE82');
          `}
        </Script>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
