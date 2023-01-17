import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createClient, WagmiConfig } from "wagmi";
import { ethers } from "ethers";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// Setup wagmi client with metemask
const client = createClient({
  autoConnect: true,
  provider: ethers.providers.getDefaultProvider(),
});
export const theme = extendTheme({
  colors,
  fonts: {
    heading: "Cabin, Arial, sans-serif!important",
    body: "Cabin, Arial, sans-serif!important",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ChakraProvider>
  );
}
