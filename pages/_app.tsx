import type { AppProps } from "next/app";
import Head from "next/head";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/euclid-circular-b"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
