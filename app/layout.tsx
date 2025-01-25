import type { Metadata } from "next";
import "./globals.css";
import styles from "@/styles/typography.module.css";

export const metadata: Metadata = {
  title: "Kristina's Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.paragraph}>{children}</body>
    </html>
  );
}
