import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;

    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
