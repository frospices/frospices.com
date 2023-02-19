import styled from 'styled-components';
import { layout, space, variant } from 'styled-system';
import css from '@styled-system/css';

import { BoxProps } from "./Box";

type Props = BoxProps & {
  variant: 'primary' | 'secondary'
}

const variants = {
  primary: {
    color: 'white',
    borderWidth: 'sm',
    borderStyle: 'solid',
    borderColor: 'primary_600',
    backgroundColor: 'primary',
    boxShadow: 'sm',
    ':hover:enabled': {
      backgroundColor: 'primary_700',
      borderColor: 'primary_700',
    },
    ':active:enabled': {
      backgroundColor: 'primary_800',
      borderColor: 'primary_800',
    },
  },
  secondary: {
    color: 'white',
    borderWidth: 'xs',
    borderStyle: 'solid',
    borderColor: 'primary',
    backgroundColor: 'primary',
    ':hover:enabled': {
      backgroundColor: 'primary',
      borderColor: 'primary',
    },
    ':active:enabled': {
      backgroundColor: 'primary',
      borderColor: 'primary',
    },
  },
};

const Button = styled.button<Props>`
  ${variant({
    variants,
  })}
  ${css({
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: 'lg',
    cursor: 'pointer',
    outline: 'none',
    width: 'fit-content',
    height: '40px'
  })}
  ${layout}
  ${space}
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default Button;
