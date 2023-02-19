import { useState, SyntheticEvent, useRef } from "react";

import Text from './Text'
import Box from './Box'
import Input, { TextArea } from './Input'
import Button from './Button'

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null)
  
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setLoading(true);
    
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    }

    const data = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value
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
    await response.json()
    
    setSuccess(true)
    
    if (formRef.current) {
      formRef.current.reset()
    }
    setLoading(false)
    setError(true)
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
          <TextArea
            placeholder="Message"
            name="message"
            id="message"
            height="100%"
            rows={4}
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
