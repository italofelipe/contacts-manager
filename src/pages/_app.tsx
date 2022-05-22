import type { AppProps } from "next/app";
import GlobalStyle from "../styles";
import "../styles/check.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
