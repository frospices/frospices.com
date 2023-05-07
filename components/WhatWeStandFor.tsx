import React from "react";

import Flex from "./Flex";
import Text from "./Text";

const WhatWeStandFor = () => {
  return (
    <Flex
      padding={["xl", "xxl"]}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      my="xs"
      backgroundColor="background"
      id="about"
    >
      <Text mb="md" fontWeight="bold" color="gray_900" fontSize="xl">
        What We Stand For
      </Text>
      <Text mb="md">
        At Frospices, we believe that good food brings people together. That’s
        why we’re dedicated to bringing the best quality homemade African food
        right to your doorstep. We’re passionate about using fresh,
        locally-sourced ingredients and preparing them with care and attention
        to detail. Our vetted chefs are skilled in a variety of African cuisines
        and bring a wealth of knowledge and expertise to every dish they create.
        Whether you’re a foodie looking to explore new flavors or a homesick
        African looking for a taste of home, we’ve got you covered.
      </Text>
      <Text>
        We’re also committed to supporting our local communities and creating
        sustainable partnerships with our suppliers. Our goal is to not only
        provide delicious food, but also to make a positive impact on the people
        and places we serve.
      </Text>
    </Flex>
  );
};

export default WhatWeStandFor;
