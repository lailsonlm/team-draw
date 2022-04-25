import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/dist/pages/_document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          
          <meta name="theme-color" content="#042940" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#042940" />
          <meta name="description" content="Sorteio de forma aleatória para montar os times da sua pelada." />
          <meta property="og:title" content="Sorteio de Times" />
          <meta property="og:description" content="Sorteio de forma aleatória para montar os times da sua pelada." />
          <meta property="og:locale" content="pt_BR" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}