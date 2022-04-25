import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, rgba(4, 41, 64, 0.9) 0%, rgba(4, 41, 64, 0.9) 100%), url("/bg.jpg") center no-repeat;
    background-size: cover;
    color: #042940;
    font-family: 'Roboto', sans-serif;
  }

  form, textarea {
    font-family: 'Roboto', sans-serif;
  }
`