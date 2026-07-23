import type { Metadata } from "next";
import "./globals.css";

const description =
  "Una casona con jardín interno en Buenos Aires. Pilates, masajes y experiencias de bienestar para volver a vos.";

export const metadata: Metadata = {
  title: "Casa Oriente — Wellness, pilates y masajes",
  description,
  openGraph: {
    title: "Casa Oriente",
    description,
    images: ["/og.png"],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Oriente",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
