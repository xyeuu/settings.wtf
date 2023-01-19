import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
//import { ethers } from "ethers";
import "@rainbow-me/rainbowkit/styles.css";

import {
  argentWallet,
  trustWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";

import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: "Settings.wtf",
  chains,
});

const demoAppInfo = {
  appName: "Settings.wtf",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ chains }),
      trustWallet({ chains }),
      metaMaskWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// Setup wagmi client with metemask
// const client = createClient({
//   autoConnect: true,
//   provider: ethers.providers.getDefaultProvider(),
// });

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
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
