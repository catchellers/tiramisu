import type { Metadata } from "next";
import { Baloo_2, Quicksand } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

const body = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Tiramisu Hg · Tiramisu nhà làm Quận 7",
    template: "%s · Tiramisu Hg",
  },
  description:
    "Tiramisu Hg (H.G House) — tiramisu, panna cotta và flan nhà làm ở Tân Hưng, Quận 7. Tiramisu 45k/hộp, freeship dưới 3km.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
