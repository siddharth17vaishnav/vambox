import Head from "next/head";
import Footer from "@/components/Footer";
import VideoComponent from "@/components/VideoComponent";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function StreamVideo() {
  const router = useRouter();
  const url = router.asPath.split("?")[1];
  useEffect(() => {
    if (!router.asPath.split("?")[1]) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>VAMBOX</title>
        <meta name="description" content="vambox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VideoComponent url={url} />
        <Footer />
      </main>
    </>
  );
}
