import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indiehires",
  description: "Unified platform for recruiter, serviceprovider and users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
