import localFont from "next/font/local";

export const Cantarell = localFont({
  variable: "--font-cantarell",
  src: [
    {
      path: "../public/fonts/Cantarell-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cantarell-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Cantarell-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const SanaSansAlt = localFont({
  variable: "--font-sana-sans-alt",
  preload: false,
  src: [
    {
      path: "../public/fonts/SanaSansAlt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SanaSansAlt-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
