import Head from "next/head";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import DropFile from "@/components/DropFile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>VAMBOX</title>
        <meta name="description" content="vambox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          heading="VAMBOX"
          message="Enjoy Unlimited 360* Videos and Images in VR for FREE."
        />
        <Description />
        <DropFile />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
