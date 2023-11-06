import "@/styles/globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import '@mantine/core/styles.css';

const theme = createTheme({
  primaryColor: "blue",
});

export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
