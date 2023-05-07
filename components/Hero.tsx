import styled from "styled-components";

import Flex from "./Flex";
import Text from "./Text";
import Box from "./Box";

import EmailSubscription from "./EmailSubcription";
import { useFeatureFlag } from "../contexts/featureFlags";

const HeroContainer = styled(Flex)`
  position: relative;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: left;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("hero.jpeg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Hero = () => {
  const {
    features: { isBetaV1 },
  } = useFeatureFlag();

  return (
    <HeroContainer padding={["xl", "xxl"]}>
      <Box
        position="relative"
        color="white"
        width={["100%", "500px"]}
        mt={["md", "xl"]}
      >
        <Text
          as="h1"
          color="white"
          fontSize={["xxl", "xxxl"]}
          lineHeight={["xl", "xxl"]}
          letterSpacing="-0.02em"
        >
          Experience the Best of African Cuisine from the Comfort of Your Home.
        </Text>
        <Text color="white" width={["100%", "85%"]} fontSize="md">
          Disvover the rich flavors of African cuisine made by local homemade
          chefs and delivered straight to your door. Enjoy authentic, fresh, and
          delicious meals without the hassle.
        </Text>
        <Box width={["100%", "85%"]} my="sm">
          <EmailSubscription buttonLabel="Notify Me" />
          {isBetaV1 && (
            <Text fontSize="xs">
              We care about your data in our{" "}
              <Text
                as="a"
                href="/privacy"
                color="white"
                style={{ textDecoration: "underline" }}
              >
                privacy policy.
              </Text>{" "}
            </Text>
          )}
        </Box>
      </Box>
    </HeroContainer>
  );
};

export default Hero;
