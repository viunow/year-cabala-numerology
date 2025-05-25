import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Calculadora de Ano Pessoal - Numerologia Cabalística 2025",
    template: "%s | Numerologia Cabalística",
  },
  description:
    "Descubra seu Ano Pessoal 2025 através da Numerologia Cabalística. Calculadora gratuita que revela as energias e tendências do seu ano baseado na sua data de nascimento.",
  keywords: [
    "numerologia cabalística",
    "ano pessoal 2025",
    "calculadora numerologia",
    "cabala numerologia",
    "previsão 2025",
    "numerologia gratis",
    "ano pessoal cabala",
    "significado numerológico",
    "calculadora ano pessoal",
    "numerologia online",
  ],
  authors: [{ name: "Numerologia Cabalística" }],
  creator: "Numerologia Cabalística",
  publisher: "Numerologia Cabalística",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://numerologia-cabalistica.vercel.app",
    siteName: "Numerologia Cabalística",
    title: "Calculadora de Ano Pessoal - Numerologia Cabalística 2025",
    description:
      "Descubra seu Ano Pessoal 2025 através da Numerologia Cabalística. Calculadora gratuita que revela as energias e tendências do seu ano.",
    images: [
      {
        url: "https://numerologia-cabalistica.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Ano Pessoal - Numerologia Cabalística",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Ano Pessoal - Numerologia Cabalística 2025",
    description:
      "Descubra seu Ano Pessoal 2025 através da Numerologia Cabalística. Calculadora gratuita que revela as energias e tendências do seu ano.",
    images: ["https://numerologia-cabalistica.vercel.app/og-image.jpg"],
    creator: "@numerologiacabala",
  },
  verification: {
    google: "seu-codigo-google-search-console",
    yandex: "seu-codigo-yandex",
    yahoo: "seu-codigo-yahoo",
  },
  alternates: {
    canonical: "https://numerologia-cabalistica.vercel.app",
    languages: {
      "pt-BR": "https://numerologia-cabalistica.vercel.app",
    },
  },
  category: "Espiritualidade",
  classification: "Numerologia",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#7c3aed",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#1e1b4b",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4622453145159228"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Calculadora de Ano Pessoal - Numerologia Cabalística",
              url: "https://numerologia-cabalistica.vercel.app",
              description:
                "Calculadora gratuita de Ano Pessoal baseada na Numerologia Cabalística. Descubra as energias e tendências do seu ano através da sua data de nascimento.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
              },
              author: {
                "@type": "Organization",
                name: "Numerologia Cabalística",
              },
              publisher: {
                "@type": "Organization",
                name: "Numerologia Cabalística",
                logo: {
                  "@type": "ImageObject",
                  url: "https://numerologia-cabalistica.vercel.app/logo.png",
                },
              },
              datePublished: "2025-01-01",
              dateModified: "2025-05-25",
              inLanguage: "pt-BR",
              isAccessibleForFree: true,
              keywords:
                "numerologia cabalística, ano pessoal, calculadora, cabala, previsão 2025",
              mainEntity: {
                "@type": "WebApplication",
                name: "Calculadora Numerológica",
                description:
                  "Ferramenta para calcular o Ano Pessoal na Numerologia Cabalística",
                applicationCategory: "Calculator",
                featureList: [
                  "Cálculo de Ano Pessoal",
                  "Interpretação numerológica",
                  "Dicas personalizadas",
                  "Interface responsiva",
                ],
              },
              potentialAction: {
                "@type": "UseAction",
                target: "https://numerologia-cabalistica.vercel.app",
                object: "Calculadora de Ano Pessoal",
              },
              audience: {
                "@type": "Audience",
                audienceType:
                  "Pessoas interessadas em numerologia e autoconhecimento",
              },
            }),
          }}
        />

        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
