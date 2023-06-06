import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Poppins-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
  ],
  variable: "--font-poppins",
});

const routhem = localFont({
  src: '../../public/fonts/Routhem.ttf',
  variable: '--font-routhem' 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${routhem.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
