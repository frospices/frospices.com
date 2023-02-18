import styled from "styled-components";
import { TypographyProps } from "styled-system";

import Box, { BoxProps } from "./Box";

const Text = styled(Box)<BoxProps & TypographyProps>`
  white-space: break-spaces;
`;

export default Text;
