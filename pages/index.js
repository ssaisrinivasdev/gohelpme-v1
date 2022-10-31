import Head from "next/head";

import Header from "../components/UI/Header";
import Cards from "../components/UI/Cards";
import Footer from "../components/UI/Footer";
import Hero from "../components/UI/Hero";
import Hero2 from "../components/UI/Hero2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <div className="flex max-lg:flex-col lg:flex-row  gap-10 justify-center py-20 items-center ">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Hero2 />
      <Footer />
    </div>
  );
}
