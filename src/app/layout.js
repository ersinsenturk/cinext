import { PT_Sans, Playfair } from "next/font/google";
import "./globals.css";
import MainHeader from "@/src/components/header/header";
import Providers from "./providers";

const ptsans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ptsans",
  display: "swap",
});
const playfair = Playfair({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | ciNext",
    default: "ciNext",
  },

  description: "Movie discovery app with Next.js",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body
        className={`${ptsans.className} ${ptsans.variable} ${playfair.variable}`}
      >
        <Providers>
          <MainHeader />
          <main className="container mx-auto p-4">{props.children}</main>
          {props.modal}
        </Providers>
      </body>
    </html>
  );
}
