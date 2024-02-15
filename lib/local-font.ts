import localFont from "next/font/local";

const Cantarell = localFont({
  src: [
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
    {
      path: "../public/fonts/Cantarell-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Cantarell-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Cantarell-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
});

export default Cantarell;
