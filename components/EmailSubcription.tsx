import { useState, SyntheticEvent } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import Flex from './Flex'
import Text from './Text'
import Input from './Input'
import Button from './Button'

type Props = {
 buttonLabel: string
}

const EmailSubscription = ({ buttonLabel }: Props) => {
 
 const [isFormSubmitted, setIsFornSubmitted] = useState(false)
 
 const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      email: event.target.email.value 
    }
    
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/form'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    
    const response = await fetch(endpoint, options)
    const result = await response.json()
    
    event.target.email.value = ''
     setIsFornSubmitted(!!response)
 }
  
  if (isFormSubmitted) {
   return (
    <Flex alignItems="center">
     <FaCheckCircle color="green" />
     <Text ml="xs" fontSize="md">Thanks for subscribing.</Text>
    </Flex>)
  }
   
 return (
    <Flex alignItems="center" as="form" flexWrap="wrap" onSubmit={handleSubmit}>
     <Flex flexDirection="column" flex="1">
      <Input type="email" name="email" id="email" placeholder='Enter your email' required />
     </Flex>
     <Flex alignItems="center" flexDirection="column" mx="xs">
      <Button variant="secondary" type="submit" px="sm">
       <Text fontWeight="bold" fontSize="sm">
        {buttonLabel}
       </Text>
      </Button>
    </Flex>
  </Flex>
 )
}

export default EmailSubscription;