import Head from "next/head";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="@import url('https://fonts.googleapis.com/css2?family=Lato&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&family=Montserrat:wght@600;800&family=Poppins:wght@400;600;700;800&display=swap');" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
