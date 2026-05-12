import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Art of Joy | Joy Yaelman",
  description: "Initial artist portfolio concept for Joy Yaelman, highlighting illustration, poetry, botanical motifs, patterns, and public art links.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
