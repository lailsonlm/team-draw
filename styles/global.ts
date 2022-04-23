import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #042940;
    color: #042940;
    font-family: 'Roboto', sans-serif;
  }

  form, textarea {
    font-family: 'Roboto', sans-serif;
  }
`