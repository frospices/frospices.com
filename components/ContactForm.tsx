import { useState, SyntheticEvent, useRef } from "react";

import Text from './Text'
import Box from './Box'
import Input from './Input'
import Button from './Button'

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const formRef = useRef()
  
  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
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
    
    formRef.current?.reset()
    setLoading(false)
  }

  return (
    <Box>
      <Text as="h1">Contact Us</Text>
      {success && (
        <Text>
          Your message has been sent. Thank you for reaching out to us! We will
          get back to you as soon as possible.
        </Text>
      )}
      {error && (
        <Text>
          There was an error sending your message. Please try again later.
        </Text>
      )}
      {!success && (
        <Box as="form" ref={formRef} onSubmit={handleSubmit}>
           <Input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            required
            my="sm"
            borderRadius="sm"
           />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            required
            my="sm"
            borderRadius="sm"
          />
          <Input
            as="textarea"
            placeholder="Message"
            name="message"
            id="message"
            height="100%"
            rows="4"
            required
            my="sm"
            borderRadius="sm"
            py="sm"
          />
          <Button textAlign="center" type="submit" disabled={loading} variant="secondary" px="sm" width={["100%", "50%"]} py="sm">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ContactUs;
