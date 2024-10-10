import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/500.css'; // Medium weight
import '@fontsource/poppins/600.css'; // Semi-bold weight
import '@fontsource/poppins/700.css'; // Bold weight

export const metadata: Metadata = {
  title: "Club Management",
  description: "College project",
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
