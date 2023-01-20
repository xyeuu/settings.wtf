import { Link, Image, Flex, Button } from "@chakra-ui/react";
// import { InjectedConnector } from "@wagmi/core";
// import { useState, useEffect } from "react";
// import {
//   useAccount,
//   useConnect,
//   usePrepareContractWrite,
//   useContractWrite,
// } from "wagmi";
// import ethers from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  // const [button, setButton] = useState("Connect Wallet");
  // const [scale, setScale] = useState(1);
  // const { address, isConnected } = useAccount();

  // function to shorten wallet address
  // function shortenAddress(address: string) {
  //   return `${address.slice(0, 6)}...${address.slice(-4)}`;
  // }

  // useEffect(() => {
  //   if (isConnected) {
  //     setButton(shortenAddress(address));
  //   } else {
  //     setButton("Connect Wallet");
  //   }
  // }, [address, isConnected]);

  return (
    <header>
      <Flex
        paddingLeft="1em"
        paddingRight="1em"
        paddingTop="1em"
        justifyContent="space-between"
      >
        {/* <Link href="/logosettingswtf3.png"> */}
        <Image src="/logofeeswtf.png" width="128px" height="24px" />
        {/* </Link> */}
        <ConnectButton
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          chainStatus="icon"
        />
        {/* <Button
          backgroundColor="#1495D6"
          borderRadius="0.5em"
          fontSize="15"
          color="white"
          fontWeight="500"
          fontFamily="Cabin, Arial, sans-serif!important"
          width="128px"
          height="40px"
          _hover={{ backgroundColor: "#1495D6" }}
          onMouseEnter={() => setScale(1.1)}
          onMouseLeave={() => setScale(1)}
          style={{ transform: `scale(${scale})` }}
          onClick={() => connect()}
        >
          {button}
        </Button> */}
      </Flex>
    </header>
  );
}
