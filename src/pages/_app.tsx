import Footer from "@/Components/Layout/Fragment/Footer";
import Navbar from "@/Components/Layout/Fragment/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Encode_Sans } from "next/font/google";
import Head from "next/head";

const encode = Encode_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </Head>
      <div className={encode.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
