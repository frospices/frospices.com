import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Text from '../components/Text'

const Imprint: NextPage = () => {
  return (
    <Box padding={["xl", "xxl"]}>
      <Head>
        <title>Frospices - Imprint</title>
        <meta name="description" content="Imprint of Frospices, the Afro-cuisine virtual kitchen" />
      </Head>
      <Box>
            <Text as="h1" fontSize="xxl">Imprint</Text>
            <Text>
              Frospices is an online Afro-cuisines virtual kitchen that offers
              the best quality homemade African food.
            </Text>
            <Text as="h2" fontSize="xl">Contact Information</Text>
            <Text>
              Address: 123 Main Street, Anytown USA 12345
            </Text>
            <Text>
              Phone: (123) 456-7890
            </Text>
            <Text>
              Email: info@frospices.com
            </Text>
            <Text as="h2" fontSize="xl">Disclaimer</Text>
            <Text>
              The content of this website has been created with the greatest
              possible care. However, Frospices cannot guarantee the accuracy,
              completeness, and timeliness of the information provided. The use
              of the website and its content is at your own risk.
            </Text>
            <Text as="h2" fontSize="xl">Copyright</Text>
            <Text>
              All rights reserved. Reproduction, modification, distribution,
              or any other use of the content of this website requires the
              written permission of Frospices.
            </Text>
      </Box>
    </Box>
  );
};

export default Imprint;
