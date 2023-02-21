import { useState, SyntheticEvent, useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import Flex from './Flex'
import Text from './Text'
import Input from './Input'
import Button from './Button'

type Props = {
 buttonLabel: string
}

const EmailSubscription = ({ buttonLabel }: Props) => {
 
 const [message, setMessage] = useState('')
 const [error, setError] = useState('')
 
 const formRef = useRef<HTMLFormElement>(null)
 
 const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    
    const target = event.target as typeof event.target & {
     email: { value: string };
    }

    const data = {
      email: target.email.value 
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
     
    if (response.status === 200) {
     if (formRef.current) {
       formRef.current.reset()
       setMessage(result.message)
     } 
    } else {
     setError(result.message)
    }  
 }
  
  if (message) {
   return (
    <Flex alignItems="center">
     <FaCheckCircle color="green" />
     <Text ml="xs" fontSize="md">Thanks for subscribing.</Text>
    </Flex>)
  }
   
 return (
   <>
    <Flex alignItems="center" as="form" flexWrap="wrap" onSubmit={handleSubmit} ref={formRef}>
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
  {error && <Text color="red">{error} Please try again later.</Text>}
  </>
 )
}

export default EmailSubscription;