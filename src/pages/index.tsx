import { Inter } from "next/font/google";
import Head from "next/head";
import HomeLayout from "@/Components/Layout/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pss Sleman</title>
      </Head>
      <main>
        <HomeLayout />
      </main>
    </>
  );
}
