import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { ScrollPositionProvider } from "../context/Scroll.context";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--inter-font",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ScrollPositionProvider>
        <style jsx global>
          {`
            :root {
              --inter-font: ${inter.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </ScrollPositionProvider>
    </ChakraProvider>
  );
}

export default MyApp;
