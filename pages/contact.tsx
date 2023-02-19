import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Box from '../components/Box'
import ContactUs from '../components/ContactForm'

const Contact: NextPage = () => {
  return (
    <Box padding={["xl", "xxl"]}>
      <Head>
        <title>Frospices - Contact</title>
        <meta name="description" content="Frospices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box width={["100%", "70%", "60%"]} mx="auto">
        <ContactUs />
      </Box>
    </Box>
  )
}

export default Contact
