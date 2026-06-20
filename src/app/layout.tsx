import type { Metadata } from "next";
import { Cormorant, Caveat, Inter, Marck_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script-cyrillic",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const marckScript = Marck_Script({
  variable: "--font-marck",
  weight: "400",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Данислан & Мадина — Үйлөнүү үлпөтү",
  description:
    "2026-жылдын 17-июлunda Бишкекте, Meikin ресторанында өткөрүлүүчү тойго чакырабыз",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ky"
      className={`${cormorant.variable} ${caveat.variable} ${marckScript.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#F4F1EA] font-sans antialiased text-neutral-900 leading-[1.65]">
        {children}
      </body>
    </html>
  );
}
