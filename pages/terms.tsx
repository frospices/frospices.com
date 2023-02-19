import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Text from '../components/Text'

const TermsAndConditions: NextPage = () => {
  return (
    <Box padding={["xl", "xxl"]}>
    <Head>
        <title>Frospices - Terms and Condition</title>
        <meta name="description" content="Terms and Condition of Frospices, the Afro-cuisine virtual kitchen" />
      </Head>
      <Text as="h1" fontSize="xxl" fontWeight="bold">Terms and Conditions</Text>
      <Text>
        Welcome to Frospices, a virtual kitchen that delivers the best quality homemade African food,
        prepared by vetted chefs. Please read these terms and conditions carefully before using our
        service. By accessing or using our service, you agree to be bound by these terms and conditions.
        If you do not agree to these terms and conditions, you may not use our service.
      </Text>

      <Text as="h2" fontSize="xl">Use of Service</Text>
      <Text>
        You agree to use our service only for lawful purposes and in accordance with these terms and
        conditions. You will not use our service:
      </Text>
      <Box as="ul">
        <Box as="li">
          In any way that violates any applicable federal, state, local, or international law or
          regulation
        </Box>
        <Box as="li">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</Box>
        <Box as="li">
          {`To transmit, or procure the sending of, any advertising or promotional material, including
          any "junk mail," "chain letter," "spam," or any other similar solicitation`}
        </Box>
        <Box as="li">
          To impersonate or attempt to impersonate Frospices, a Frospices employee, another user, or
          any other person or entity
        </Box>
        <Box as="li">
          {`To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our
          service, or which, as determined by Frospices, may harm Frospices or users of our service or
          expose them to liability`}
        </Box>
      </Box>

      <Text as="h2" fontSize="xl">Modification of Terms and Conditions</Text>
      <Text>
        {`We reserve the right, at our sole discretion, to modify or replace these terms and conditions
        at any time. If a revision is material, we will provide at least 30 days' notice prior to any
        new terms taking effect. What constitutes a material change will be determined at our sole
        discretion.`}
      </Text>      

      <Text as="h2" fontSize="xl">Contact Us</Text>
      <Text>
        If you have any questions about these terms and conditions, please contact us at
        contact@frospices.com.
      </Text>
    </Box>
  );
};

export default TermsAndConditions;
