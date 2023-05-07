import { useState, SyntheticEvent, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

import Flex from "./Flex";
import Text from "./Text";
import Input from "./Input";
import Button from "./Button";

type Props = {
  buttonLabel: string;
};

const EmailSubscription = ({ buttonLabel }: Props) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    setIsLoading(true);

    const target = event.target as typeof event.target & {
      email: { value: string };
    };

    const data = {
      email: target.email.value,
    };

    const endpoint = "/api/form";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpoint, options);
      const result = await response.json();

      setIsLoading(false);

      if (response.status === 200) {
        if (formRef.current) {
          formRef.current.reset();
          setMessage(result.message);
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    }
  };

  if (message) {
    return (
      <Flex alignItems="center">
        <FaCheckCircle color="green" />
        <Text ml="xs" fontSize="md">
          Thanks for subscribing.
        </Text>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        alignItems="center"
        as="form"
        flexWrap="wrap"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Flex flexDirection="column" flex="1">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </Flex>
        <Flex alignItems="center" flexDirection="column" mx="xs">
          <Button
            variant="secondary"
            type="submit"
            px="sm"
            disabled={isLoading}
          >
            <Text fontWeight="bold" fontSize="sm">
              {isLoading ? "Submitting..." : buttonLabel}
            </Text>
          </Button>
        </Flex>
      </Flex>
      {error && <Text color="red">{error} Please try again later.</Text>}
    </>
  );
};

export default EmailSubscription;
