import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Social Siyappa | Creative Digital Marketing Agency in India",
  description:
    "Social Siyappa is a full-service digital marketing agency offering SEO, social media marketing, performance marketing, branding, website development, and creative design solutions.",
  keywords: [
    "Social Siyappa",
    "digital marketing agency",
    "SEO company India",
    "social media marketing",
    "performance marketing",
    "content strategy",
    "PPC advertising",
    "branding and design",
    "creative agency",
    "website development",
  ],
  authors: [{ name: "Social Siyappa Team", url: "https://socialsiyappa.com" }],
  creator: "Social Siyappa",
  publisher: "Social Siyappa",
  metadataBase: new URL("https://socialsiyappa.com"),

  openGraph: {
    title: "Social Siyappa | Creative Digital Marketing Agency",
    description:
      "Transform your brand’s online presence with Social Siyappa — experts in SEO, social media, paid ads, and branding.",
    url: "https://socialsiyappa.com",
    siteName: "Social Siyappa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/social-siyappa-og.jpg",
        width: 1200,
        height: 630,
        alt: "Social Siyappa - Digital Marketing Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Social Siyappa | Digital Marketing Agency",
    description:
      "Grow your brand with creative digital marketing strategies — SEO, social media, paid ads, and content by Social Siyappa.",
    creator: "@socialsiyappa",
    images: ["/assets/social-siyappa-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  themeColor: "#ffffff",
  alternates: {
    canonical: "https://socialsiyappa.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_SITE_VERIFICATION_CODE"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Structured Data: JSON-LD Schema for a Digital Marketing Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Social Siyappa",
              url: "https://socialsiyappa.com",
              logo: "https://socialsiyappa.com/assets/social-siyappa-og.jpg",
              image: "https://socialsiyappa.com/assets/social-siyappa-og.jpg",
              description:
                "Social Siyappa is a full-service digital marketing agency offering SEO, SMM, PPC, branding, and creative design solutions to help businesses grow online.",
              telephone: "+91-XXXXXXXXXX",
              email: "info@socialsiyappa.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Office Address Here",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
                postalCode: "110001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/socialsiyappa",
                "https://www.instagram.com/socialsiyappa",
                "https://www.linkedin.com/company/socialsiyappa",
                "https://twitter.com/socialsiyappa",
              ],
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-19:00",
              areaServed: { "@type": "Country", name: "India" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "124",
              },
              serviceType: [
                "Digital Marketing",
                "SEO Optimization",
                "Social Media Marketing",
                "Performance Marketing",
                "Content Strategy",
                "Branding",
                "Web Development",
              ],
            }),
          }}
        />
      </head>

      {/* ✅ Global Playfair Display applied */}
      <body
        className={`${playfair.variable} ${geistMono.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
