import type { AppProps } from "next/app";
import { server } from "../infra/mirage";
import GlobalStyle from "../styles";
import "../styles/check.css";

(function () {
  server;
})();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
