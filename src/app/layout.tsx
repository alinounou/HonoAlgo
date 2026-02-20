import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f59e0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "HonoAlgo - Professional Trading Algorithm with 98.5% Accuracy",
  description: "Get precise and reliable trading signals based on advanced technical analysis. HonoAlgo is a professional trading algorithm trusted by over 10,000 traders worldwide. Free and Pro versions available.",
  keywords: ["HonoAlgo", "trading algorithm", "trading signals", "technical analysis", "TradingView", "forex", "stocks", "cryptocurrency", "RSI", "trading indicators"],
  authors: [{ name: "HonoAlgo Team" }],
  creator: "HonoAlgo",
  publisher: "HonoAlgo",
  applicationName: "HonoAlgo",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://honoalgo.com",
    siteName: "HonoAlgo",
    title: "HonoAlgo - Professional Trading Algorithm with 98.5% Accuracy",
    description: "Get precise and reliable trading signals based on advanced technical analysis. Trusted by over 10,000 traders worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HonoAlgo - Trading Algorithm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@honoalgo",
    creator: "@honoalgo",
    title: "HonoAlgo - Professional Trading Algorithm with 98.5% Accuracy",
    description: "Get precise and reliable trading signals based on advanced technical analysis.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://honoalgo.com",
    languages: {
      "en-US": "https://honoalgo.com",
      "ar-SA": "https://honoalgo.com?lang=ar",
    },
  },
  category: "finance",
  classification: "Trading Software",
};

// Schema.org structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HonoAlgo",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web, TradingView, MetaTrader 4, MetaTrader 5",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "12.50",
    "priceCurrency": "USD",
    "offerCount": "2",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "10547",
    "bestRating": "5",
    "worstRating": "1",
  },
  "description": "Professional trading algorithm with 98.5% accuracy. Get precise and reliable trading signals based on advanced technical analysis.",
  "author": {
    "@type": "Organization",
    "name": "HonoAlgo Team",
  },
  "creator": {
    "@type": "Organization",
    "name": "HonoAlgo",
    "url": "https://honoalgo.com",
  },
  "screenshot": "https://honoalgo.com/screenshot.png",
  "softwareVersion": "6.2",
  "releaseNotes": "Added InfinityRSI V6.2 with advanced divergence signals",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is HonoAlgo 98.5% accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our algorithm has been tested on over 1000 gold trades over 3 years, with documented and verified results. We use advanced machine learning techniques to analyze patterns and trends.",
      },
    },
    {
      "@type": "Question",
      "name": "What markets are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support Forex, Stocks, Cryptocurrencies, Commodities, and Indices. The algorithm works on all financial instruments available on TradingView.",
      },
    },
    {
      "@type": "Question",
      "name": "Is there a refund policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer a 30-day money-back guarantee. If you're not satisfied, contact us and we'll refund you in full.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID
            Or use @next/third-parties/google GoogleTagManager component */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
