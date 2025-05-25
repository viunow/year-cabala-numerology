import Main from "@/components/Main";

export async function generateMetadata() {
  return {
    title: "Calculadora de Ano Pessoal 2025 - Numerologia Cabalística Gratuita",
    description:
      "✨ Descubra GRÁTIS seu Ano Pessoal 2025 com nossa calculadora de Numerologia Cabalística. Conheca as energias, tendências e oportunidades que te aguardam este ano. Cálculo preciso baseado na sua data de nascimento.",
    keywords: [
      "calculadora ano pessoal 2025",
      "numerologia cabalística gratis",
      "ano pessoal cabala",
      "previsão numerológica 2025",
      "calculadora numerologia online",
      "significado ano pessoal",
      "cabala numerologia brasil",
      "números da sorte 2025",
      "ciclo pessoal numerologia",
      "energia do ano 2025",
    ],
    alternates: {
      canonical: "https://numerologia-cabalistica.vercel.app/",
    },
    openGraph: {
      title: "🔮 Calculadora de Ano Pessoal 2025 - Numerologia Cabalística",
      description:
        "Descubra GRÁTIS as energias que regem seu 2025! Calculadora precisa de Numerologia Cabalística. ✨ Milhares de pessoas já descobriram seu caminho!",
      url: "https://numerologia-cabalistica.vercel.app/",
      type: "website",
      locale: "pt_BR",
      siteName: "Numerologia Cabalística - Ano Pessoal 2025",
      images: [
        {
          url: "https://numerologia-cabalistica.vercel.app/og-calculadora-ano-pessoal.jpg",
          width: 1200,
          height: 630,
          alt: "Calculadora de Ano Pessoal 2025 - Numerologia Cabalística",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "🔮 Ano Pessoal 2025 - Calculadora Gratuita",
      description:
        "Descubra as energias que regem seu 2025 com nossa calculadora de Numerologia Cabalística. Totalmente grátis! ✨",
      images: [
        "https://numerologia-cabalistica.vercel.app/twitter-card-calculadora.jpg",
      ],
      creator: "@numerologiacabala",
      site: "@numerologiacabala",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:author": "Numerologia Cabalística",
      "article:section": "Espiritualidade",
      "article:tag": "numerologia, cabala, ano pessoal, 2025, calculadora",
      "og:locale:alternate": "pt_BR",
      "fb:app_id": "SEU_FACEBOOK_APP_ID",
    },
  };
}

export default function Home() {
  return <Main />;
}
