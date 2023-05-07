import Flex from "./Flex";
import Box from "./Box";
import Text from "./Text";

const data = {
  steps: [
    {
      id: 1,
      title: "Browse",
      icon: "/browse.svg",
      content: "Search for authentic meals made by talented chefs near you.",
    },
    {
      id: 2,
      title: "Order",
      icon: "/order.svg",
      content: "Add dishes to your order and checkout in just a few steps.",
    },
    {
      id: 3,
      title: "Enjoy",
      icon: "/enjoy.svg",
      content:
        "Eat delicious homemade food made by certified chefs in your community!",
    },
  ],
};

const HowItWorks = () => (
  <Flex
    padding={["xl", "xxl"]}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    my="xs"
  >
    <Text
      as="span"
      fontSize={["xl", "xxl"]}
      fontWeight="bold"
      color="gray_900"
      mb="sm"
    >
      How{" "}
      <Text color="primary" as="span">
        Frospices
      </Text>{" "}
      Works
    </Text>
    <Flex justifyContent="space-between" flexDirection={["column", "row"]}>
      {data.steps.map((item) => (
        <Box
          key={item.id}
          p="sm"
          textAlign="center"
          width={["100%", "33.333%"]}
        >
          <Box as="img" src={item.icon} alt={item.content} height="48px" />
          <Text fontWeight="bold" fontSize="md" color="gray_900" mt="sm">
            {item.title}
          </Text>
          <Text textAlign="center" mt="xs">
            {item.content}
          </Text>
        </Box>
      ))}
    </Flex>
  </Flex>
);

export default HowItWorks;
