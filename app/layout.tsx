import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./provider";
import "./globals.css";
// meta tag not for layout. it should be for pages/routes.

export const metadata = {
  title: "Ciel Website",
  description: "We serve humanity by technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-lt-installed="true">
      <body>
        <Header />
        <Providers>
          {children}
          </Providers>
        <Footer />
      </body>
    </html>
  );
}
