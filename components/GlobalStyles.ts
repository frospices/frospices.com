import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";

const GlobalStyles = createGlobalStyle`
  body {
    ${css({
      margin: 0,
      padding: 0,
      fontFamily: "secondary",
      fontSize: "sm",
      lineHeight: "sm",
      backgroundColor: "neutral_100",
      color: "text",
    })}
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  ul {
    list-style-type: none;
  }

  p {
    ${css({
      fontSize: "md",
      lineHeight: "sm",
    })}
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  p, a {
    ${css({
      fontFamily: "secondary",
      letterSpacing: "-0.3px",
      color: "text",
    })}
  }

  h1, h2, h3, h4 {
    ${css({
      fontFamily: "primary",
      fontWeight: "regular",
      color: "gray_900",
    })}
  }

  h1 {
    ${css({
      fontSize: "xxl",
      lineHeight: "xl",
    })}
  }

  h2 {
    ${css({
      fontSize: "lg",
      lineHeight: "lg",
    })}
  }

  h3 {
    ${css({
      fontSize: "md",
      lineHeight: "md",
    })}
  }

  h4 {
    ${css({
      fontSize: "md",
      lineHeight: "md",
    })}
  }
`;

export default GlobalStyles;
