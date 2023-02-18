import type { NextPage } from 'next'
import Head from 'next/head'

import AboutUs from '../components/AboutUs'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frospices - About</title>
        <meta name="description" content="Frospices" />
      </Head>
      <AboutUs />
    </>
  )
}

export default About

