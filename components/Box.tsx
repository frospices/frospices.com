import styled, { StyledComponent } from "styled-components";
import {
  compose,
  space,
  color,
  border,
  layout,
  typography,
  shadow,
  position,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  order,
  background,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  BordersProps,
  ShadowProps,
  PositionProps,
  BackgroundColorProps,
  BackgroundProps,
  FlexProps,
  FlexBasisProps,
  FlexGrowProps,
  FlexShrinkProps,
  OrderProps,
  grid,
  GridProps,
  flexbox,
  FlexboxProps
} from "styled-system";

export type BoxProps = {
  children?: React.ReactNode | undefined;
  color?: string;
  tabIndex?: number;
} & SpaceProps &
  LayoutProps &
  TypographyProps &
  BordersProps &
  ShadowProps &
  PositionProps &
  BackgroundColorProps &
  BackgroundProps &
  FlexboxProps &
  FlexProps &
  FlexBasisProps &
  FlexGrowProps &
  FlexShrinkProps &
  OrderProps &
  GridProps;

const Box: StyledComponent<"div", any, BoxProps> = styled(
  "div"
).attrs<BoxProps>(({ tabIndex }) => ({
  tabIndex,
}))(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  compose(
    space,
    color,
    border,
    layout,
    typography,
    shadow,
    position,
    flex,
    flexbox,
    flexBasis,
    flexShrink,
    flexGrow,
    order,
    grid,
    background
  )
);

export default Box;
