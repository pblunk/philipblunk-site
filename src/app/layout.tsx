import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://philipblunk.com"),
  title: "Phil Blunk | Product, Design & Development",
  description:
    "Phil Blunk designs and builds digital products, websites, and experiences — turning what-if ideas into things people can actually use.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
