import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.scss";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { themeConfig } from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], display: "swap"});

export const metadata: Metadata = {
  title: { default: "HVAC", template: "%s | HVAC" },
  description: "HVAC version 3",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const getLayoutData = await fetch(`${process.env.DATABASE_HOST}/layout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const layoutData: TLayout = await getLayoutData.json();
  const headerData = {
    _id: layoutData.header._id,
    navbar: layoutData.header.navbar,
    contactInfo: layoutData.contactInfo,
  }
  const footerData = {
    _id: layoutData.footer._id,
    contactTitle: layoutData.footer.contactTitle,
    aboutContent: layoutData.footer.aboutContent,
    imgs: layoutData.footer.imgs,
    topCarTypes: layoutData.footer.topCarTypes,
    topCarBrands: layoutData.footer.topCarBrands,
    contactInfo: layoutData.contactInfo,
  }
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/imgs/favicon.ico" type="image/x-icon" />
      </head>
      <body className={lato.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themeConfig}>
            <Header data={headerData}/>
            {children}
            <Footer data={footerData}/>
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.1/mixitup.min.js" />
      </body>
    </html>
  );
}
