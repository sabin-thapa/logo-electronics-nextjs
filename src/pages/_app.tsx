import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "400", "500", "700"],
  variable: "--font-poppins",
});

const routhem = localFont({
  src: "../../public/fonts/Routhem.ttf",
  variable: "--font-routhem",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${poppins.variable} ${routhem.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
