import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.RENDER_EXTERNAL_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://the-secret-wine.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "THE SECRET | It’s in the taste.",
  description: "Discover THE SECRET Red Blend and MCC - two premium South African wines, one unforgettable taste.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "WHAT’S THE SECRET?",
    description: "THE SECRET. It’s in the taste.",
    type: "website",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "THE SECRET Red Blend and MCC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WHAT’S THE SECRET?",
    description: "THE SECRET. It’s in the taste.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
