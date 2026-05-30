import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulrehmancodes.com"),
  title: {
    default:
      "Abdul Rehman | Software Engineer - POS Systems, SaaS & Custom Web Development",
    template: "%s | Abdul Rehman - Software Engineer",
  },
  description:
    "Full-stack software engineer in Lahore specializing in POS systems for restaurants & retail, SaaS products, and custom web development. 50+ projects delivered with 100% client satisfaction.",
  keywords: [
    "software engineer",
    "POS system developer",
    "restaurant POS",
    "sanitary shop POS",
    "SaaS development",
    "custom web development",
    "Lahore developer",
    "Pakistan software engineer",
    "point of sale system",
    "Next.js developer",
    "React developer",
    "full stack developer",
    "business software",
    "inventory management system",
    "online ordering system",
  ],
  authors: [{ name: "Abdul Rehman", url: "https://abdulrehmancodes.com" }],
  creator: "Abdul Rehman",
  publisher: "Abdul Rehman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulrehmancodes.com",
    siteName: "Abdul Rehman - Software Engineer",
    title:
      "Abdul Rehman | Software Engineer - POS Systems, SaaS & Custom Web Development",
    description:
      "Full-stack software engineer specializing in POS systems for restaurants & retail, SaaS products, and custom web applications. Based in Lahore, serving clients worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Rehman - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | Software Engineer",
    description:
      "Full-stack engineer building POS systems, SaaS products & custom web solutions.",
    images: ["/og-image.png"],
    creator: "@abdulrehmancodes",
  },
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
  alternates: {
    canonical: "https://abdulrehmancodes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0f172a" />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdul Rehman",
              url: "https://abdulrehmancodes.com",
              image: "https://abdulrehmancodes.com/og-image.png",
              jobTitle: "Software Engineer",
              description:
                "Full-stack software engineer specializing in POS systems, SaaS products, and custom web development",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              email: "abdurrehman5683@gmail.com",
              telephone: "+923328873258",
              sameAs: [
                "https://www.linkedin.com/in/abdul-rehman-1b2174242",
              ],
              knowsAbout: [
                "POS Systems",
                "SaaS Development",
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
              ],
            }),
          }}
        />

        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Abdul Rehman - Software Development",
              url: "https://abdulrehmancodes.com",
              description:
                "Custom POS systems, SaaS products, and web development services for restaurants, retail, and businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              telephone: "+923328873258",
              email: "abdurrehman5683@gmail.com",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "POS System Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS Product Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web Development",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "30",
              },
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abdul Rehman - Software Engineer",
              url: "https://abdulrehmancodes.com",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
