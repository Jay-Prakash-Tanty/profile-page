
import Footer from "@/components/footer/Footer";
import ResponsiveAppBar from "@/components/navbar/ResponsiveAppBar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "clubs of vssut burla",
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
        <ResponsiveAppBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
