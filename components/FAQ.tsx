import Flex from './Flex'
import Box from './Box'
import Accordion from "./Accordion"
import Text from './Text'

const FAQs = [
  {
    id: '100',
    title: "What is Frospices?",
    content: "Frospices is a virtual kitchen that offers the best quality homemade African food delivered straight to your door."
  },
  {
    id: '101',
    title: "Who are the chefs behind Frospices?",
    content: "Our chefs are carefully vetted and have a passion for bringing the flavors of Africa to life."
  },
  {
    id: '102',
    title: "What kind of food does Frospices offer?",
    content: "With a wide range of menu items to choose from, you'll never get bored with your taste buds traveling the world! Whether you're in the mood for a savory stew, spicy pepper soup, or a sweet dessert, Frospices has something for everyone."
  },
  {
    id: '103',
    title: "What are the benefits of subscribing to Frospices?",
    content: "By subscribing to Frospices, you'll get exclusive access to special dishes, discounts, and the ability to rate and review your experience. Join us on a culinary journey to Africa, one bite at a time!"
  }
]


const FAQ = () => {
  return (
    <Flex padding={["xl", "xxl"]} flexDirection="column" alignItems="center" justifyContent="center" width={["100%", "70%"]} mx="auto">
      <Box my="md" textAlign="center">
        <Text fontWeight="bold" fontSize="xl" color="gray_900">Frequently Asked Questions</Text>
        <Text my="sm">Everything you need to know about the product and billings</Text>
      </Box>
      {FAQs.map(item => <Accordion title={item.title} key={item.id}>{item.content}</Accordion>)}
    </Flex>
   )
}

export default FAQ