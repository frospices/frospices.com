import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Text from '../components/Text'

const PrivacyPolicy: NextPage = () => {
  return (
    <Box padding={["xl", "xxl"]}>
    <Head>
        <title>Frospices - Privacy Policy</title>
        <meta name="description" content="Privacy Policies of Frospices, the Afro-cuisine virtual kitchen" />
      </Head>
      <Text as="h1" fontSize="xxl" fontWeight="bold">Privacy Policy</Text>
      <Text>
        At Frospices, we are committed to protecting the privacy of our users.
        This privacy policy outlines the information we collect and how we use it.
      </Text>
      <Text as="h2" fontSize="xl">Information Collection and Use</Text>
      <Text>
        We collect personal information from our users when they register for an account, place an order, or participate in promotions or surveys. This information includes name, email address, postal address, and payment information.
      </Text>
      <Text>
        We use this information to provide our services, process payments, and communicate with our users. We may also use the information to improve our services and tailor our offerings to the interests of our users.
      </Text>
      <Text fontSize="xl" as="h2">Information Sharing and Disclosure</Text>
      <Text>
        {`We do not sell or rent our users' personal information to third parties. However, we may share the information with third-party service providers who help us provide our services. These service providers are bound by strict confidentiality agreements and are only permitted to use the information to perform services on our behalf.`}
      </Text>
      <Text>
        We may also disclose user information in response to legal requests, such as subpoenas or court orders, or in the interest of public safety or national security.
      </Text>
      <Text as="h2" fontSize="xl">Data Security</Text>
      <Text>
        {`We use a variety of security measures to protect the confidentiality and integrity of our users' personal information. This includes secure servers, encryption, and firewalls. However, no data transmission over the Internet or data storage system can be guaranteed to be 100% secure.`}
      </Text>
      <Text as="h2" fontSize="xl">Changes to this Privacy Policy</Text>
      <Text>
        We may update this privacy policy from time to time to reflect changes to our practices or to comply with legal requirements. We will provide notice of any changes by updating the effective date at the top of this policy.
      </Text>
      <Text as="h2" fontSize="xl">Contact Us</Text>
      <Text>
        If you have any questions or concerns about our privacy policy or the information we collect and use, please contact us at contact@frospices.com.
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
