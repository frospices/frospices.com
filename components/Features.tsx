import styled from 'styled-components'

import Flex from './Flex'
import Text from './Text'
import Box from './Box'

const Image = styled(Box)`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
`

const Feature = ({ text }: { text: string }) => {
  return (
    <Flex alignItems="center" my="sm">
      <Box as="img" src="/check.svg" />
      <Text mx="xs">{text}</Text>
    </Flex>
  )
}

const Features = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" mt="xl"> 
     <Text fontWeight="bold" color="gray_900" fontSize={["lg", "xxl"]} textAlign="center">Advantages for both chef and consumers</Text>
     <Text fontSize="md" my="md" width={["100%", "70%", "60%"]} textAlign="center" px="sm">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</Text>
        <Flex justifyContent="space-between" flexDirection={["column", "row"]}>
          <Box flex="1" px={["md", "xsl"]} ml={["0", "sm"]}>
              <Box as="img" src="/browse.svg" alt="Order Icons" height="48px" />
              <Text fontWeight="bold" fontSize="xl" color="gray_900">Become a Chef.</Text>
              <Text width={["100%", "80%"]} my="xs">
                Unleash your culinary skills and become your own boss by offering homemade meals and earning income at your own pace.
              </Text>
              <Feature text="Online Ordering" />
              <Feature text="Schedule your cooking days" />
              <Feature text="Prepare and Pack your food" />
              <Feature text="Everyone knows you" />
          </Box>
           <Flex justifyContent="right" flex="1">
             <Image
               as="img"
               src="Chef.jpg"
               alt="Chef"
               flex="1"
              />
            </Flex>
        </Flex>
        <Flex mt={["lg", "xl"]} justifyContent="space-between" flexDirection={["column-reverse", "row"]}>
          <Image
            as="img"
            src="customer.jpeg"
            alt="Customer"
            flex="1"
          />
          <Box flex="1" mx={["0", "sm"]} px={["md", "xl"]}>
            <Box as="img" src="/customer-icon.svg" alt="Order Icons" height="48px" />
            <Text fontWeight="bold" fontSize="xl" color="gray_900">Home-cooked food delivery</Text>
            <Text width={["100%", "80%"]} my="xs">
              Enjoy the comfort of a home-style meal with the convenience of delivery services.
            </Text>
            <Feature text="Pre-order fresh african food" />
            <Feature text="Real-time tracking" />
            <Feature text="Multiple choices of cuisines." />
          </Box>
        </Flex>
    </Flex>
  );
};

export default Features;
