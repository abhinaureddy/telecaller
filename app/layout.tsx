import type { Metadata, Viewport } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalBackground } from "@/components/GlobalBackground";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display-next",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-next",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "telecaller.ai — AI Telecallers for Indian Businesses",
    template: "%s | telecaller.ai",
  },
  description:
    "24×7 AI telecallers in Hindi, English, and 10+ Indian languages. TRAI-compliant, managed service for SMBs. Book a 15-minute demo.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "telecaller.ai — AI Telecallers for Indian Businesses",
    description:
      "24×7 AI telecallers in Hindi, English, and 10+ Indian languages. TRAI-compliant, managed service for SMBs.",
    images: ["/og-image.png"],
    siteName: "telecaller.ai",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "telecaller.ai — AI Telecallers for Indian Businesses",
    description: "24×7 AI telecallers in Hindi, English, and 10+ Indian languages.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#cfe5e0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${instrumentSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
      style={{
        fontFamily: "var(--font-sans-next), system-ui, sans-serif",
      }}
    >
      <body>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* Satoshi isn't on Google Fonts; Fontshare is its official CDN */}
        <link
          rel="stylesheet"
          precedence="default"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: var(--font-sans-next), "IBM Plex Sans", system-ui, sans-serif;
                --font-display: var(--font-display-next), "Instrument Serif", Georgia, serif;
                --font-mono: var(--font-mono-next), "IBM Plex Mono", monospace;
              }
            `,
          }}
        />
        <GlobalBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
