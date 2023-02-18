import React, { useState, useEffect } from "react";

import Box from "./Box";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => (
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

export default Input;
