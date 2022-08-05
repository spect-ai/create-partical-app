import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParticalClientProvider } from "@partical/react-partical";
import { ThemeProvider } from "degen";
import "degen/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultMode="dark" defaultAccent="blue">
      <ParticalClientProvider particalClientUri="https://test1.partical.xyz">
        <Component {...pageProps} />;
      </ParticalClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
