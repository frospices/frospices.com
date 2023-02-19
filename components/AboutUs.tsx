import Text from './Text'
import Flex from './Flex'

const AboutUs = () => {
  return (
    <Flex id="about-us" padding={["xl", "xxl"]} flexDirection="column" justifyContent="center" alignItems="center" width={["100%", "70%"]} mx="auto">
      <Text as="h1" fontSize="xxl" fontWeight="bold">About Us</Text>
      <Text my="sm">
        Frospices is a virtual kitchen that offers the best quality homemade African food delivered straight to your door.
        Our mission is to bring the rich flavors and diverse cuisine of Africa to homes around the world. 
        We work with carefully vetted chefs who have a passion for cooking and sharing their culinary heritage.
        With a wide range of menu items to choose from, you will never get bored with your taste buds traveling the world!
      </Text>
      <Text my="sm">
        Whether you are in the mood for a savory stew, spicy pepper soup, or a sweet dessert, Frospices has something for everyone. 
        Our goal is to make it easy and convenient for you to enjoy authentic African dishes in the comfort of your own home.
        We use only the freshest ingredients and carefully follow traditional recipes to ensure that each dish is full of flavor and nourishment.
      </Text>
      <Text my="sm">
        Join us on a culinary journey to Africa, one bite at a time. Subscribe today for exclusive access to special dishes, discounts, and the ability to rate and review your experience. 
      We can not wait to share our love of African cuisine with you!
      </Text>
    </Flex>
  );
};

export default AboutUs;
