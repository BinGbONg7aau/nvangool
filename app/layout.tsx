import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nvangool",
  description: "Portfolio website for Nikolaj Krog van Gool",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="w-full">{children}</body>
    </html>
  );
}
