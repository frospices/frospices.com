import Box, { BoxProps } from "./Box";

const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & BoxProps) => (
  <Box
    as="input"
    fontSize="sm"
    px="sm"
    borderRadius="lg"
    height="40px"
    width="100%"
    color="gray_500"
    {...props}
  />
);

export const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & BoxProps) => (
  <Box
    as="textarea"
    fontSize="sm"
    px="sm"
    borderRadius="lg"
    height="40px"
    width="100%"
    color="gray_500"
    {...props}
  />
)

export default Input;
