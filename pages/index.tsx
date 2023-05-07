import type { NextPage } from "next";
import Head from "next/head";

import Box from "../components/Box";
import Hero from "../components/Hero";
import WhatWeStandFor from "../components/WhatWeStandFor";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Frospices</title>
        <meta name="description" content="Frospices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <HowItWorks />
      <WhatWeStandFor />
      <Features />
      <FAQ />
    </Box>
  );
};

export default Home;
