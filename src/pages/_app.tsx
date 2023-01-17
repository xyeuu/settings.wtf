import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createClient, WagmiConfig } from "wagmi";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

// const contractAddress = "0xD3239E18FD8f5a896ea72374fa15D358130E35B9";

// const provider = new ethers.providers.Web3Provider(window.ethereum);

// const signer = provider.getSigner();

// const contract = new ethers.Contract(contractAddress, signer);

// function NFT({ tokenId }) {
//   const contentId = "QmRGJRFTqVP76bRHLn2rFNZAU8yDsUck2DvKoDzeyeCVww";
//   const metadataURI = "${contentId}/${tokenId}.json";
//   const setting =
//     "https://ipfs.io/ipfs/QmRGJRFTqVP76bRHLn2rFNZAU8yDsUck2DvKoDzeyeCVww?filename=0.json";

//   const [isMinted, setIsMinted] = useState(false);

//   useEffect(() => {
//     getMintedStatus();
//   }, [isMinted]);

//   const getMintedStatus = async () => {
//     const result = await contract.isContentOwned(metadataURI);
//     setIsMinted(result);
//   };

//   const mintToken = async () => {
//     const connection = contract.connect(signer);
//     const addr = connection.address;
//     const result = await contract.payToMint(addr, metadataURI, {
//       value: ethers.utils.parseEther("0.01"),
//     });

//     await result.wait();
//     getMintedStatus();
//   };

//   async function getURI() {
//     const uri = await contract.tokenURI(tokenId);
//   }
// }

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
