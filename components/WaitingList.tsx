import Flex from './Flex'
import Text from './Text'
import Box from './Box'

import EmailSubscription from './EmailSubcription'

const WaitingList = () => (
  <Flex justifyContent="space-between" alignItems="center" px={["xl", "xxl"]} py="xl" backgroundColor="background" boxShadow="xs" flexWrap="wrap">
    <Box>
     <Text fontWeight="bold" color="gray_900" fontSize={["lg", "xl"]} my="sm">Sign up for our waiting list.</Text>
     <Text fontSize="sm">Stay up to date with the latest news and announcements.</Text>
    </Box>
    <Box mt={["xs", "0"]}>
       <EmailSubscription buttonLabel='Subscribe' />
     </Box>
  </Flex>
)

export default WaitingList;