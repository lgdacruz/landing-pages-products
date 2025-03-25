import { createGlobalStyle } from "styled-components";

const colors = {
  dark: "#2F084D",
  medium: "#5D0F99",
  light: "#9D55D5",
  grey: "#fefefe",
};

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
body {
  background: rgb(2,0,36);
background: linear-gradient(155deg, ${colors.dark} 0%, ${colors.medium} 35%, ${colors.dark} 100%);

  color: ${colors.grey};

   /* Works on Firefox */
   * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2b0b9e;
    border-radius: 2px;
    border: none;
  }
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyle;
