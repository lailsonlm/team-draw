import { Html, Head, Main, NextScript } from 'next/document'
import Document from 'next/dist/pages/_document'
import { GetServerSideProps } from 'next/types'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
          
          <meta name="theme-color" content="#042940" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#042940" />
          <meta name="description" content="Sorteio de forma aleatória para montar os times da sua pelada." />
          <meta property="og:title" content="Sorteio de Times" />
          <meta property="og:description" content="Sorteio de forma aleatória para montar os times da sua pelada." />
          <meta property="og:locale" content="pt_BR" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}
  }
}