import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Text from '../components/Text'

const CookWithUs: NextPage = () => {
  return (
    <Box padding={["xl", "xxl"]}>
      <Head>
        <title>Frospices - Cook with Us</title>
        <meta name="description" content="Frospices" />
      </Head>
      <Text as="h1" fontSize="xxl">Cook with Us</Text>
      <Text>
        Are you a talented chef with a passion for African cuisine? Join our team at Frospices and share your love for food with the world!
      </Text>
      <Text my="sm">
        As a Frospices chef, you'll have the opportunity to showcase your unique dishes to a wide audience and bring the flavors of Africa to life. Our chefs are carefully vetted to ensure that we only deliver the highest quality homemade food to our customers.
      </Text>
      <Text my="sm">
        We're always on the lookout for talented individuals to join our team. If you're interested in becoming a Frospices chef, please fill out the form below and we'll get back to you as soon as possible.
      </Text>
    </Box>
  )
}

export default CookWithUs
