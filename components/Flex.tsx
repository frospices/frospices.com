import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";

import Box, { BoxProps } from "./Box";

const Flex = styled(Box)<BoxProps & FlexboxProps>({ display: "flex" }, flexbox);

Flex.displayName = "Flex";

export default Flex;
